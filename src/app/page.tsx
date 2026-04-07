import Link from "next/link";
import { Navbar, Footer } from "@/components/Layout";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const coreBeliefs = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: "Health Should Be Experienced",
    description: "Not taught in a classroom, but felt through movement, connection, and shared moments.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Connection Is Wellbeing",
    description: "Social connection is not a luxury — it is a fundamental part of living well.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    title: "Beauty Increases Engagement",
    description: "Beautiful environments and thoughtful design inspire people to show up and stay present.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Small Experiences, Big Change",
    description: "One meaningful experience can spark a shift toward a healthier, more intentional life.",
  },
];

const testimonials = [
  { quote: "This was unlike anything I've experienced. The walk, the people, the energy — it felt like a reset button for my life.", name: "Sarah L.", role: "Walk The World Participant" },
  { quote: "The dinner was beautiful and the food was incredible. But what truly stood out was how connected everyone felt by the end.", name: "David T.", role: "HFHY Dinner Guest" },
  { quote: "ILEA creates experiences that make you want to live better. It's not preachy — it's inspiring.", name: "Michelle K.", role: "Returning Participant" },
];

/* ──────────────────────────────────────────────
   Homepage
   ────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0B3C7C]">
            <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
              <source src="/videos/hero-home.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          </div>

          {/* Watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[10vw] font-bold uppercase leading-none tracking-tight text-white/[0.04]">
              ILEA LIFESTYLE
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8">
            <p className="mb-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm border border-white/10">
              ILEA Lifestyle Experience Series
            </p>
            <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Movement.{" "}
              <span className="text-gold-light">Connection.</span>{" "}
              <span className="bg-gradient-to-r from-gold to-[#9ACBEB] bg-clip-text text-transparent">
                Transformation.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              A curated journey that brings together movement, connection, and wellbeing — designed to inspire a more intentional and elevated way of living.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#experiences"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(255,255,255,0.3)] active:translate-y-0"
              >
                Explore Experiences
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
              >
                Our Story
              </Link>
            </div>
            <div className="mt-20 animate-bounce">
              <svg className="mx-auto h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
        </section>

        {/* Events Showcase */}
        <section id="experiences" className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Experiences</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">Two Journeys, One Vision</h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">Each experience is designed to activate a different dimension of wellbeing — together, they form a complete lifestyle journey.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Walk The World Card */}
              <Link href="/walk-the-world" className="group relative block rounded-2xl border border-sage/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-floating lg:p-10">
                <div className="mb-6 text-3xl">🌿</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted/60">天行健 · Activation</p>
                <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground lg:text-3xl">Walk The World</h3>
                <p className="mb-6 leading-relaxed text-foreground-muted">An outdoor walking experience that blends movement, nature, and community. Step into daylight, fresh energy, and intentional connection.</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["Movement", "Outdoor", "Wellness", "Energy"].map(t => <span key={t} className="rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage">{t}</span>)}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-primary transition-all duration-200 group-hover:gap-3">
                  Learn More <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              {/* HFHY Dinner Card */}
              <Link href="/hfhy-dinner" className="group relative block rounded-2xl border border-gold/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-floating lg:p-10">
                <div className="mb-6 text-3xl">✨</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted/60">快乐盛餐 · Connection</p>
                <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground lg:text-3xl">HFHY Dinner</h3>
                <p className="mb-6 leading-relaxed text-foreground-muted">A curated healthy dining experience inspired by Diner en Blanc. Elegant tables, warm lighting, and food that nourishes both body and soul.</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["Dining", "Social", "Atmosphere", "Wellness"].map(t => <span key={t} className="rounded-full bg-gold-light/40 px-3 py-1 text-xs font-medium text-gold">{t}</span>)}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-primary transition-all duration-200 group-hover:gap-3">
                  Learn More <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Philosophy</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Premium but not exclusive.<br />
                  <span className="text-blue-primary">Experiential, not informational.</span>
                </h2>
                <p className="mb-8 leading-relaxed text-foreground-muted">
                  The ILEA Lifestyle Experience Series is not just a collection of events. It is a curated journey that brings together movement, connection, and wellbeing — designed to inspire a more intentional and elevated way of living.
                </p>
                <p className="leading-relaxed text-foreground-muted">
                  We believe that environment shapes behaviour, beauty increases engagement, and small experiences can trigger long-term change. Every detail is intentional. Every moment is designed.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {coreBeliefs.map((belief) => (
                  <div key={belief.title} className="rounded-xl border border-foreground/5 bg-background-soft p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-primary/5 text-blue-primary">{belief.icon}</div>
                    <h4 className="mb-2 font-heading text-base font-semibold text-foreground">{belief.title}</h4>
                    <p className="text-sm leading-relaxed text-foreground-muted">{belief.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">Voices</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">What Participants Say</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-blue-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <svg className="mb-4 h-8 w-8 text-blue-primary/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
                  <p className="mb-6 italic leading-relaxed text-foreground-muted">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-xs text-foreground-muted">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#2E8B57]" />
          <div className="grain absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Your Journey Starts Here</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">Choose Your Experience</h2>
              <p className="mx-auto max-w-xl text-lg text-white/60">
                Two paths, one vision. Pick the experience that speaks to you — or join both.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Walk The World Card */}
              <Link href="/walk-the-world" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 lg:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-sage/30" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                    🌿
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">天行健 · Activation</p>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white">Walk The World</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">
                    An outdoor walking experience blending movement, nature, and community. 5 KM scenic route through Gardens by the Bay.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["Movement", "Outdoor", "Wellness"].map(t => <span key={t} className="rounded-full bg-sage/15 px-3 py-1 text-xs font-medium text-sage">{t}</span>)}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3 group-hover:shadow-[0_4px_20px_rgba(143,175,155,0.4)]">
                    Join the Walk
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>

              {/* HFHY Dinner Card */}
              <Link href="/hfhy-dinner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 lg:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/30" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                    ✨
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">快乐盛餐 · Connection</p>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white">HFHY Dinner</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">
                    A curated healthy dining experience inspired by Diner en Blanc. All-white dress code, communal tables, sunset arrival.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["Dining", "Social", "Atmosphere"].map(t => <span key={t} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-light">{t}</span>)}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3 group-hover:shadow-[0_4px_20px_rgba(126,184,224,0.4)]">
                    Reserve a Seat
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
