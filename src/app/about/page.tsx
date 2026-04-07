import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const beliefs = [
  "Health should be experienced, not taught",
  "Environment shapes behaviour",
  "Social connection is part of wellbeing",
  "Beauty increases engagement",
  "Small experiences can trigger long-term change",
];

const team = [
  { name: "Team Member", role: "Founder & Director", bio: "Passionate about blending lifestyle and wellness into meaningful experiences." },
  { name: "Team Member", role: "Experience Designer", bio: "Creates environments that inspire connection and transformation." },
  { name: "Team Member", role: "Operations Lead", bio: "Ensures every detail is intentional and every experience runs seamlessly." },
  { name: "Team Member", role: "Community Manager", bio: "Builds and nurtures the ILEA community across all touchpoints." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background-soft">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              About ILEA
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Inspiring a More Intentional Way of Living
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              The ILEA Lifestyle Experience Series is a curated platform that
              blends movement, wellbeing, and social connection into meaningful,
              premium experiences.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary mb-4">
                  Our Mission
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Passive Living to{" "}
                  <span className="text-blue-primary">Intentional Living</span>
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  We exist to inspire individuals to shift from passive living
                  into a more intentional, healthier, and socially connected
                  lifestyle. Not through lectures or programs — but through
                  beautiful, curated experiences that make you <em>want</em> to
                  live better.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Our positioning is simple: premium but not exclusive,
                  lifestyle-driven not event-driven, experiential not
                  informational.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-background-soft border border-foreground/5">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    The Duality Principle
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Everything we create balances two sides:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["Premium", "Accessible"],
                      ["Elegant", "Natural"],
                      ["Structured", "Emotional"],
                      ["Health", "Lifestyle"],
                    ].map(([left, right]) => (
                      <div key={left} className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-medium">{left}</span>
                        <span className="text-foreground-muted/40 mx-2">&harr;</span>
                        <span className="text-foreground-muted">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="py-24 lg:py-32 bg-blue-deep relative overflow-hidden">
          <div className="grain absolute inset-0" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">
              Core Beliefs
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12">
              What We Believe
            </h2>
            <div className="space-y-4">
              {beliefs.map((belief, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-white/80 text-base">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Our Team
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                The People Behind ILEA
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.role}
                  className="group p-6 rounded-2xl bg-background-soft border border-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-primary/10 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-blue-primary/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gold font-medium uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scalability Vision */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary mb-4">
              The Vision
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building a Lifestyle Ecosystem
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-10">
              ILEA is designed to expand into a multi-event ecosystem — health
              programs, lifestyle community, and travel experiences. Everything
              built now is reusable. Every participant is a long-term
              relationship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Multi-Event Ecosystem", "Health Programs (HLCC)", "Lifestyle Community", "Travel Experiences"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-blue-primary/5 text-blue-primary text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
