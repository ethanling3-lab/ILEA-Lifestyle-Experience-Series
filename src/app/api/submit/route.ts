import { NextRequest, NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validation";
import { createServerClient } from "@/lib/supabase";
import { sendEmail } from "@/lib/email";
import { renderConfirmationEmail } from "@/emails/ConfirmationEmail";
import { createPaymentRequest } from "@/lib/hitpay";

// Pricing map (placeholder values)
const PRICING: Record<string, Record<string, number>> = {
  walk_the_world: { individual: 35, couple: 60, group: 25 },
  hfhy_dinner: { standard: 120, premium: 180, vip: 280 },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = submissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const supabase = createServerClient();

    // Check for duplicate
    const { data: existing } = await supabase
      .from("submissions")
      .select("id")
      .eq("email", data.email)
      .eq("type", data.type)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: "You have already registered for this event." },
        { status: 409 }
      );
    }

    // Calculate amount
    const amount = PRICING[data.type]?.[data.ticket_type] ?? 0;

    // Prepare extra data fields
    const { name, email, phone, type, ticket_type, ...extraFields } = data;

    // Insert into Supabase
    const { data: record, error: dbError } = await supabase
      .from("submissions")
      .insert({
        type,
        name,
        email,
        phone: phone || null,
        data: { ticket_type, ...extraFields },
        status: "new",
        payment_status: amount > 0 ? "pending_payment" : "none",
        amount,
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("Database error:", dbError.message);
      return NextResponse.json(
        { error: "Registration failed. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email (fire-and-forget)
    sendEmail(
      email,
      `Registration Confirmed — ${type === "walk_the_world" ? "Walk The World" : "HFHY Dinner"}`,
      renderConfirmationEmail({ name, eventType: type, ticketType: ticket_type })
    ).catch(() => {});

    // Trigger Google Sheets sync (fire-and-forget)
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/sheets/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: record.id,
        type,
        name,
        email,
        phone,
        ticket_type,
        amount,
        created_at: new Date().toISOString(),
      }),
    }).catch(() => {});

    // If payment required, create HitPay request
    if (amount > 0) {
      try {
        const { paymentUrl, paymentId } = await createPaymentRequest(
          amount,
          "SGD",
          email,
          record.id,
          name
        );

        await supabase
          .from("submissions")
          .update({ payment_id: paymentId })
          .eq("id", record.id);

        return NextResponse.json({
          success: true,
          id: record.id,
          redirectUrl: paymentUrl,
        });
      } catch {
        // Payment creation failed, but registration is saved
        return NextResponse.json({
          success: true,
          id: record.id,
          message: "Registered successfully. Payment link will be sent via email.",
        });
      }
    }

    return NextResponse.json({ success: true, id: record.id });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
