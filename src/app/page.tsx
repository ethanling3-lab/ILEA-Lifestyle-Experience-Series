import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";

const coreBeliefs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Health Should Be Experienced",
    description: "Not taught in a classroom, but felt through movement, connection, and shared moments.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Connection Is Wellbeing",
    description: "Social connection is not a luxury — it is a fundamental part of living well.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Beauty Increases Engagement",
    description: "Beautiful environments and thoughtful design inspire people to show up and stay present.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Small Experiences, Big Change",
    description: "One meaningful experience can spark a shift toward a healthier, more intentional life.",
  },
];

const testimonials = [
  {
    quote: "This was unlike anything I've experienced. The walk, the people, the energy — it felt like a reset button for my life.",
    name: "Sarah L.",
    role: "Walk The World Participant",
  },
  {
    quote: "The dinner was beautiful and the food was incredible. But what truly stood out was how connected everyone felt by the end.",
    name: "David T.",
    role: "HFHY Dinner Guest",
  },
  {
    quote: "ILEA creates experiences that make you want to live better. It's not preachy — it's inspiring.",
    name: "Michelle K.",
    role: "Returning Participant",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Events Showcase */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Our Experiences
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Two Journeys, One Vision
              </h2>
              <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
                Each experience is designed to activate a different dimension of
                wellbeing — together, they form a complete lifestyle journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <EventCard
                title="Walk The World"
                subtitle="天行健 · Activation"
                description="An outdoor walking experience that blends movement, nature, and community. Step into daylight, fresh energy, and intentional connection."
                href="/walk-the-world"
                accentColor="green"
                icon={<span>🌿</span>}
                tags={["Movement", "Outdoor", "Wellness", "Energy"]}
              />
              <EventCard
                title="HFHY Dinner"
                subtitle="快乐盛餐 · Connection"
                description="A curated healthy dining experience inspired by Diner en Blanc. Elegant tables, warm lighting, and food that nourishes both body and soul."
                href="/hfhy-dinner"
                accentColor="gold"
                icon={<span>✨</span>}
                tags={["Dining", "Social", "Atmosphere", "Wellness"]}
              />
            </div>
          </div>
        </section>

        {/* Brand Story / Philosophy */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                  Our Philosophy
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Premium but not exclusive.
                  <br />
                  <span className="text-blue-primary">
                    Experiential, not informational.
                  </span>
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  The ILEA Lifestyle Experience Series is not just a collection
                  of events. It is a curated journey that brings together
                  movement, connection, and wellbeing — designed to inspire a
                  more intentional and elevated way of living.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  We believe that environment shapes behaviour, beauty increases
                  engagement, and small experiences can trigger long-term change.
                  Every detail is intentional. Every moment is designed.
                </p>
              </div>

              {/* Core beliefs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreBeliefs.map((belief) => (
                  <div
                    key={belief.title}
                    className="p-6 rounded-xl bg-background-soft border border-foreground/5 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-primary/5 text-blue-primary flex items-center justify-center mb-4">
                      {belief.icon}
                    </div>
                    <h4 className="font-heading text-base font-semibold text-foreground mb-2">
                      {belief.title}
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-blue-deep relative overflow-hidden">
          <div className="grain absolute inset-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">
                Voices
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                What Participants Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <svg className="w-8 h-8 text-gold/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Join the Experience?
            </h2>
            <p className="text-foreground-muted text-lg mb-10 max-w-xl mx-auto">
              Choose your journey. Whether it&apos;s the energy of the walk or
              the warmth of the dinner — your transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/walk-the-world"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
                  bg-gradient-to-r from-sage to-[#7A9E87]
                  hover:shadow-[0_6px_24px_rgba(143,175,155,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Walk The World
              </a>
              <a
                href="/hfhy-dinner"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
                  bg-gradient-to-r from-gold to-[#D4B87A]
                  hover:shadow-[0_6px_24px_rgba(201,169,110,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                HFHY Dinner
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
