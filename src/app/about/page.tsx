"use client";

import { Navbar, Footer } from "@/components/Layout";

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
        <section className="relative overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#1558B0]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[12vw] font-bold uppercase leading-none tracking-tight text-white/[0.04]">ABOUT ILEA</span>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">About ILEA</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">Inspiring a More Intentional Way of Living</h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
              The ILEA Lifestyle Experience Series is a curated platform that blends movement, wellbeing, and social connection into meaningful, premium experiences.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">Our Mission</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  From Passive Living to <span className="text-blue-primary">Intentional Living</span>
                </h2>
                <p className="mb-6 leading-relaxed text-foreground-muted">
                  We exist to inspire individuals to shift from passive living into a more intentional, healthier, and socially connected lifestyle. Not through lectures or programs — but through beautiful, curated experiences that make you <em>want</em> to live better.
                </p>
                <p className="leading-relaxed text-foreground-muted">
                  Our positioning is simple: premium but not exclusive, lifestyle-driven not event-driven, experiential not informational.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-foreground/5 bg-background-soft p-8">
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">The Duality Principle</h3>
                  <p className="mb-4 text-sm text-foreground-muted">Everything we create balances two sides:</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[["Premium", "Accessible"], ["Elegant", "Natural"], ["Structured", "Emotional"], ["Health", "Lifestyle"]].map(([left, right]) => (
                      <div key={left} className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{left}</span>
                        <span className="mx-2 text-foreground-muted/40">&harr;</span>
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
        <section className="relative overflow-hidden bg-blue-deep py-24 lg:py-32">
          <div className="grain absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Core Beliefs</p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-white md:text-4xl">What We Believe</h2>
            <div className="space-y-4">
              {beliefs.map((belief, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">{i + 1}</span>
                  <p className="text-base text-white/80">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Team</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">The People Behind ILEA</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.role} className="group rounded-2xl border border-foreground/5 bg-background-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-primary/10">
                    <svg className="h-8 w-8 text-blue-primary/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <h3 className="mb-1 font-heading text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gold">{member.role}</p>
                  <p className="text-sm leading-relaxed text-foreground-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">The Vision</p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">Building a Lifestyle Ecosystem</h2>
            <p className="mb-10 text-lg leading-relaxed text-foreground-muted">
              ILEA is designed to expand into a multi-event ecosystem — health programs, lifestyle community, and travel experiences. Everything built now is reusable. Every participant is a long-term relationship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Multi-Event Ecosystem", "Health Programs (HLCC)", "Lifestyle Community", "Travel Experiences"].map((item) => (
                <span key={item} className="rounded-full bg-blue-primary/5 px-4 py-2 text-sm font-medium text-blue-primary">{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
