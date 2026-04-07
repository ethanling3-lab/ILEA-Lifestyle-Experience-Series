import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F9FB] to-[#EEF2F7]" />
        {/* Radial accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(30,111,217,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
        {/* Grain */}
        <div className="grain absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Eyebrow */}
        <p className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary bg-blue-primary/5 rounded-full">
          ILEA Lifestyle Experience Series
        </p>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto">
          Movement.{" "}
          <span className="text-blue-primary">Connection.</span>{" "}
          <span className="bg-gradient-to-r from-gold to-[#D4B87A] bg-clip-text text-transparent">
            Transformation.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
          A curated journey that brings together movement, connection, and
          wellbeing — designed to inspire a more intentional and elevated way of
          living.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/walk-the-world"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
              bg-gradient-to-r from-gold to-[#D4B87A]
              hover:shadow-[0_6px_24px_rgba(201,169,110,0.35)] hover:-translate-y-0.5
              active:translate-y-0"
          >
            Explore Experiences
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-foreground rounded-full transition-all duration-200
              border border-foreground/10 bg-white
              hover:border-blue-primary/20 hover:shadow-elevated hover:-translate-y-0.5
              active:translate-y-0"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-foreground-muted/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
