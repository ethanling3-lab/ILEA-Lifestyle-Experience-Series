import Link from "next/link";

interface EventCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  accentColor: "green" | "gold";
  icon: React.ReactNode;
  tags: string[];
}

export default function EventCard({
  title,
  subtitle,
  description,
  href,
  accentColor,
  icon,
  tags,
}: EventCardProps) {
  const borderColor =
    accentColor === "green" ? "border-sage/30" : "border-gold/30";
  const hoverBorder =
    accentColor === "green" ? "hover:border-sage/60" : "hover:border-gold/60";
  const tagBg =
    accentColor === "green"
      ? "bg-sage/10 text-sage"
      : "bg-gold-light/40 text-gold";

  return (
    <Link
      href={href}
      className={`group relative block p-8 lg:p-10 rounded-2xl border ${borderColor} ${hoverBorder} bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-floating`}
    >
      {/* Icon */}
      <div className="mb-6 text-3xl">{icon}</div>

      {/* Subtitle */}
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted/60 mb-2">
        {subtitle}
      </p>

      {/* Title */}
      <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-foreground-muted leading-relaxed mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-xs font-medium rounded-full ${tagBg}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <span className="inline-flex items-center text-sm font-medium text-blue-primary group-hover:gap-3 gap-2 transition-all duration-200">
        Learn More
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </Link>
  );
}
