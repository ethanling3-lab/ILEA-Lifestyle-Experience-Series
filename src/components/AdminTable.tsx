"use client";

import type { Submission } from "@/lib/types";

interface AdminTableProps {
  records: Submission[];
  total: number;
  page: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

export default function AdminTable({
  records,
  total,
  page,
  perPage,
  onPageChange,
}: AdminTableProps) {
  const totalPages = Math.ceil(total / perPage);

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-primary/10 text-blue-primary",
      contacted: "bg-gold-light/40 text-gold",
      converted: "bg-sage/10 text-sage",
      paid: "bg-green-100 text-green-700",
    };
    return colors[status] || "bg-gray-100 text-gray-600";
  };

  const paymentBadge = (status: string) => {
    const colors: Record<string, string> = {
      none: "bg-gray-100 text-gray-500",
      pending_payment: "bg-yellow-100 text-yellow-700",
      paid: "bg-green-100 text-green-700",
      payment_failed: "bg-red-100 text-red-600",
    };
    return colors[status] || "bg-gray-100 text-gray-600";
  };

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-foreground/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-background-soft border-b border-foreground/5">
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Name</th>
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Email</th>
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Event</th>
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Status</th>
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Payment</th>
              <th className="text-right px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Amount</th>
              <th className="text-left px-4 py-3 font-medium text-foreground-muted text-xs uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b border-foreground/5 hover:bg-background-soft/50 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{record.name}</td>
                <td className="px-4 py-3 text-foreground-muted">{record.email}</td>
                <td className="px-4 py-3">
                  <span className="text-xs font-medium">
                    {record.type === "walk_the_world" ? "Walk The World" : "HFHY Dinner"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${paymentBadge(record.payment_status)}`}>
                    {record.payment_status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-4 py-3 text-right text-foreground font-medium">
                  {record.amount ? `$${record.amount}` : "—"}
                </td>
                <td className="px-4 py-3 text-foreground-muted text-xs">
                  {new Date(record.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {records.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-foreground-muted">
                  No registrations yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {records.map((record) => (
          <div key={record.id} className="p-4 rounded-xl bg-white border border-foreground/5 shadow-elevated">
            <div className="flex justify-between items-start mb-2">
              <p className="font-medium text-foreground">{record.name}</p>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge(record.status)}`}>
                {record.status}
              </span>
            </div>
            <p className="text-sm text-foreground-muted mb-2">{record.email}</p>
            <div className="flex justify-between items-center text-xs text-foreground-muted">
              <span>{record.type === "walk_the_world" ? "Walk The World" : "HFHY Dinner"}</span>
              <span>{record.amount ? `$${record.amount}` : "—"}</span>
            </div>
          </div>
        ))}
        {records.length === 0 && (
          <p className="text-center text-foreground-muted py-12">No registrations yet.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-foreground-muted">
            Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, total)} of {total}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page <= 1}
              className="px-3 py-1.5 text-sm rounded-lg border border-foreground/10 hover:bg-background-soft disabled:opacity-40 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= totalPages}
              className="px-3 py-1.5 text-sm rounded-lg border border-foreground/10 hover:bg-background-soft disabled:opacity-40 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
