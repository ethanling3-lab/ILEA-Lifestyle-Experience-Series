import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    await appendToSheet([
      data.id,
      data.type,
      data.name,
      data.email,
      data.phone || "",
      data.ticket_type || "",
      String(data.amount || 0),
      data.created_at,
    ]);

    return NextResponse.json({ success: true });
  } catch {
    // Sync failure should not block anything
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
