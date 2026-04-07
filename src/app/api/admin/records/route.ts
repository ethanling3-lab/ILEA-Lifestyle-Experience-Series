import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const supabase = createServerClient();

  // Verify auth
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "created_at";
  const order = searchParams.get("order") === "asc" ? true : false;
  const typeFilter = searchParams.get("type") || "";
  const statusFilter = searchParams.get("status") || "";
  const perPage = 25;
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  let query = supabase
    .from("submissions")
    .select("*", { count: "exact" })
    .order(sort, { ascending: order })
    .range(from, to);

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
  }
  if (typeFilter) {
    query = query.eq("type", typeFilter);
  }
  if (statusFilter) {
    query = query.eq("status", statusFilter);
  }

  const { data, count, error } = await query;

  if (error) {
    return NextResponse.json({ error: "Failed to fetch records" }, { status: 500 });
  }

  // Stats
  const { data: allRecords } = await supabase
    .from("submissions")
    .select("type, payment_status, amount, created_at");

  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const stats = {
    totalRegistrations: allRecords?.length || 0,
    paidCount: allRecords?.filter((r) => r.payment_status === "paid").length || 0,
    revenue: allRecords
      ?.filter((r) => r.payment_status === "paid")
      .reduce((sum, r) => sum + (r.amount || 0), 0) || 0,
    walkTheWorldCount: allRecords?.filter((r) => r.type === "walk_the_world").length || 0,
    hfhyDinnerCount: allRecords?.filter((r) => r.type === "hfhy_dinner").length || 0,
    newThisWeek: allRecords?.filter((r) => new Date(r.created_at) >= weekAgo).length || 0,
  };

  return NextResponse.json({
    records: data,
    total: count,
    page,
    perPage,
    stats,
  });
}
