"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import type { StatsData } from "@/lib/types";

interface ChartsProps {
  stats: StatsData;
}

const COLORS = ["#8FAF9B", "#C9A96E", "#1E6FD9", "#0B3C7C"];

export default function Charts({ stats }: ChartsProps) {
  const eventData = [
    { name: "Walk The World", value: stats.walkTheWorldCount },
    { name: "HFHY Dinner", value: stats.hfhyDinnerCount },
  ];

  const statusData = [
    { name: "Total", value: stats.totalRegistrations },
    { name: "Paid", value: stats.paidCount },
    { name: "New This Week", value: stats.newThisWeek },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Event breakdown */}
      <div className="p-6 rounded-xl bg-white border border-foreground/5 shadow-elevated">
        <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">
          Registrations by Event
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={eventData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {eventData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-2">
          {eventData.map((entry, i) => (
            <div key={entry.name} className="flex items-center gap-2 text-xs text-foreground-muted">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              {entry.name} ({entry.value})
            </div>
          ))}
        </div>
      </div>

      {/* Overview bars */}
      <div className="p-6 rounded-xl bg-white border border-foreground/5 shadow-elevated">
        <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">
          Overview
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#5A5A72" }} />
              <YAxis tick={{ fontSize: 12, fill: "#5A5A72" }} />
              <Tooltip />
              <Bar dataKey="value" fill="#1E6FD9" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
