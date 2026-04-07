import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/hitpay";
import { createServerClient } from "@/lib/supabase";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    const signature = payload.hmac;
    if (!signature || !verifyWebhookSignature(payload, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const referenceNumber = payload.reference_number;
    const status = payload.status;

    const supabase = createServerClient();

    if (status === "completed") {
      const { data: record } = await supabase
        .from("submissions")
        .update({ payment_status: "paid", status: "paid" })
        .eq("id", referenceNumber)
        .select("name, email, type, data")
        .single();

      if (record) {
        const eventName = record.type === "walk_the_world" ? "Walk The World" : "HFHY Dinner";
        sendEmail(
          record.email,
          `Payment Confirmed — ${eventName}`,
          `<p>Hi ${record.name}, your payment for ${eventName} has been confirmed. See you there!</p>`
        ).catch(() => {});
      }
    } else if (status === "failed") {
      await supabase
        .from("submissions")
        .update({ payment_status: "payment_failed" })
        .eq("id", referenceNumber);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
