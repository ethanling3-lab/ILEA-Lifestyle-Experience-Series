import type { StatsData } from "@/lib/types";

interface StatsCardsProps {
  stats: StatsData;
}

const cards = [
  { key: "totalRegistrations" as const, label: "Total Registrations", prefix: "", color: "blue-primary" },
  { key: "paidCount" as const, label: "Paid", prefix: "", color: "sage" },
  { key: "revenue" as const, label: "Revenue", prefix: "$", color: "gold" },
  { key: "walkTheWorldCount" as const, label: "Walk The World", prefix: "", color: "sage" },
  { key: "hfhyDinnerCount" as const, label: "HFHY Dinner", prefix: "", color: "gold" },
  { key: "newThisWeek" as const, label: "New This Week", prefix: "", color: "blue-primary" },
];

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className="p-5 rounded-xl bg-white border border-foreground/5 shadow-elevated"
        >
          <p className="text-xs font-medium text-foreground-muted uppercase tracking-wider mb-1">
            {card.label}
          </p>
          <p className={`text-2xl font-bold text-${card.color}`}>
            {card.prefix}
            {typeof stats[card.key] === "number"
              ? stats[card.key].toLocaleString()
              : stats[card.key]}
          </p>
        </div>
      ))}
    </div>
  );
}
