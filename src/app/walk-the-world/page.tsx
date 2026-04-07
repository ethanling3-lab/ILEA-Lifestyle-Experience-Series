import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import RegistrationForm from "@/components/RegistrationForm";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Scenic Routes",
    description: "Walk through beautiful outdoor locations carefully selected for their natural beauty and energy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community",
    description: "Connect with like-minded individuals who value movement, health, and meaningful social experiences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Wellness Activities",
    description: "Experience guided wellness moments including mindful breathing, stretching, and group activities.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Fresh Energy",
    description: "Start your day with movement in daylight — proven to boost mood, energy, and long-term health.",
  },
];

const schedule = [
  { time: "7:00 AM", activity: "Check-in & Welcome", detail: "Registration, welcome pack, group stretching" },
  { time: "7:30 AM", activity: "The Walk Begins", detail: "Guided scenic walk with wellness stations along the route" },
  { time: "9:00 AM", activity: "Wellness Station", detail: "Mindful breathing, group activity, refreshments" },
  { time: "10:00 AM", activity: "Finish & Celebrate", detail: "Community gathering, photos, post-walk refreshments" },
];

export default function WalkTheWorldPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#2E8B57]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,175,155,0.3)_0%,transparent_60%)]" />
            <div className="grain absolute inset-0" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
            <p className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sage bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
              天行健 · Activation
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Walk The World
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
              An outdoor walking experience that blends movement, nature, and
              community. Step into daylight, fresh energy, and intentional
              connection.
            </p>
            <CountdownTimer
              targetDate="2026-06-15T07:00:00+08:00"
              label="Event starts in"
            />
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-4">
                What To Expect
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                More Than a Walk
              </h2>
              <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
                Every element is designed to activate your body, mind, and
                social connection.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-white border border-sage/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-sage/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary mb-4">
                Schedule
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Your Morning Journey
              </h2>
            </div>

            <div className="space-y-0">
              {schedule.map((item, i) => (
                <div key={item.time} className="relative flex gap-6 pb-10">
                  {/* Timeline line */}
                  {i < schedule.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-blue-primary/10" />
                  )}
                  {/* Dot */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-primary/10 border-2 border-blue-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-primary" />
                  </div>
                  {/* Content */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-primary mb-1">
                      {item.time}
                    </p>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {item.activity}
                    </h4>
                    <p className="text-sm text-foreground-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-white border border-foreground/5 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Date</p>
                <p className="font-heading text-2xl font-bold text-foreground">15 June 2026</p>
                <p className="text-sm text-foreground-muted mt-1">Saturday Morning</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-foreground/5 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Location</p>
                <p className="font-heading text-2xl font-bold text-foreground">Gardens by the Bay</p>
                <p className="text-sm text-foreground-muted mt-1">Singapore</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-foreground/5 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Distance</p>
                <p className="font-heading text-2xl font-bold text-foreground">5 KM</p>
                <p className="text-sm text-foreground-muted mt-1">Scenic Route</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="py-24 lg:py-32">
          <div className="max-w-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Registration
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Walk The World
              </h2>
              <p className="text-foreground-muted">
                Secure your spot in the next walking experience. Limited places available.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background-soft border border-foreground/5 shadow-elevated">
              <RegistrationForm eventType="walk_the_world" />
            </div>
          </div>
        </section>

        {/* Gallery placeholder */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-4">
                Gallery
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Past Experiences
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sage/20 to-blue-primary/10"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm text-foreground-muted/40">Photo {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
