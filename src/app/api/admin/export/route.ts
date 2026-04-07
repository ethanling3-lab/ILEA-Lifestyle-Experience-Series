import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import Papa from "papaparse";

export async function GET(request: NextRequest) {
  const supabase = createServerClient();

  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to export" }, { status: 500 });
  }

  const rows = (data || []).map((r) => ({
    ID: r.id,
    Type: r.type,
    Name: r.name,
    Email: r.email,
    Phone: r.phone || "",
    "Ticket Type": (r.data as Record<string, unknown>)?.ticket_type || "",
    Status: r.status,
    "Payment Status": r.payment_status,
    Amount: r.amount || 0,
    "Created At": r.created_at,
  }));

  const csv = Papa.unparse(rows);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="ilea-registrations-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
