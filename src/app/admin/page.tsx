"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createBrowserClient } from "@/lib/supabase";
import StatsCards from "@/components/StatsCards";
import AdminTable from "@/components/AdminTable";
import Charts from "@/components/Charts";
import type { Submission, StatsData } from "@/lib/types";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [records, setRecords] = useState<Submission[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [stats, setStats] = useState<StatsData>({
    totalRegistrations: 0,
    paidCount: 0,
    revenue: 0,
    walkTheWorldCount: 0,
    hfhyDinnerCount: 0,
    newThisWeek: 0,
  });

  // Email state
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailSending, setEmailSending] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
        return;
      }
      setToken(session.access_token);
    });
  }, [router]);

  const fetchData = useCallback(async () => {
    if (!token) return;
    const params = new URLSearchParams({
      page: String(page),
      search,
      type: typeFilter,
    });
    const res = await fetch(`/api/admin/records?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setRecords(data.records || []);
      setTotal(data.total || 0);
      setStats(data.stats);
    }
  }, [token, page, search, typeFilter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleExport = async () => {
    if (!token) return;
    const res = await fetch("/api/admin/export", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ilea-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleSendEmail = async () => {
    if (!token || !emailSubject || !emailBody) return;
    setEmailSending(true);
    const recipients = records.map((r) => r.email);
    await fetch("/api/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ recipients, subject: emailSubject, body: emailBody }),
    });
    setEmailSending(false);
    setEmailSubject("");
    setEmailBody("");
  };

  const handleLogout = async () => {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-soft">
        <p className="text-foreground-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-soft">
      {/* Header */}
      <header className="bg-white border-b border-foreground/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo-black.png" alt="ILEA" width={120} height={36} className="h-8 w-auto" />
            <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Charts */}
        <Charts stats={stats} />

        {/* Filters & Actions */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search name or email..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="px-4 py-2 rounded-xl border border-foreground/10 bg-white text-sm text-foreground placeholder:text-foreground-muted/40 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none"
            />
            <select
              value={typeFilter}
              onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }}
              className="px-4 py-2 rounded-xl border border-foreground/10 bg-white text-sm text-foreground focus:outline-none"
            >
              <option value="">All Events</option>
              <option value="walk_the_world">Walk The World</option>
              <option value="hfhy_dinner">HFHY Dinner</option>
            </select>
          </div>
          <button
            onClick={handleExport}
            className="px-5 py-2 rounded-xl bg-blue-deep text-white text-sm font-medium hover:bg-blue-primary transition-colors"
          >
            Export CSV
          </button>
        </div>

        {/* Table */}
        <AdminTable
          records={records}
          total={total}
          page={page}
          perPage={25}
          onPageChange={setPage}
        />

        {/* Email Panel */}
        <div className="p-6 rounded-xl bg-white border border-foreground/5 shadow-elevated">
          <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">
            Send Email to Current View ({records.length} recipients)
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-white text-sm text-foreground placeholder:text-foreground-muted/40 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none"
            />
            <textarea
              placeholder="Email body (HTML supported)"
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-white text-sm text-foreground placeholder:text-foreground-muted/40 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none resize-y"
            />
            <button
              onClick={handleSendEmail}
              disabled={emailSending || !emailSubject || !emailBody}
              className="px-6 py-2.5 rounded-xl bg-gold text-white text-sm font-medium hover:bg-[#B89960] disabled:opacity-50 transition-colors"
            >
              {emailSending ? "Sending..." : "Send Email"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
