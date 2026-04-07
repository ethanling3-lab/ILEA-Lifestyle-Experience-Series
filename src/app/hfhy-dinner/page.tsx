import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import RegistrationForm from "@/components/RegistrationForm";

const features = [
  {
    icon: "🕯️",
    title: "Elegant Atmosphere",
    description: "Beautiful outdoor venue with warm lighting, candles, flowers, and music creating a magical setting.",
  },
  {
    icon: "🥗",
    title: "Healthy Cuisine",
    description: "Lighter, balanced, nutrient-dense menus focused on vegetables, healthy fats, and lean proteins.",
  },
  {
    icon: "🍷",
    title: "Mindful Beverages",
    description: "Alcohol-optional with low-sugar drink options. Enjoy without compromise.",
  },
  {
    icon: "🤝",
    title: "Meaningful Connection",
    description: "Communal long tables designed to spark authentic conversation and genuine bonds.",
  },
];

const menuHighlights = [
  { category: "Starters", items: ["Seasonal garden salad with citrus vinaigrette", "Cold-pressed soup of the day"] },
  { category: "Mains", items: ["Herb-crusted sustainable fish", "Plant-forward grain bowl with tahini"] },
  { category: "Dessert", items: ["Raw cacao & avocado mousse", "Seasonal fruit platter with honey drizzle"] },
  { category: "Beverages", items: ["Botanical infused water", "Cold-pressed juices", "Optional wine pairing"] },
];

export default function HFHYDinnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D2036] to-[#0B3C7C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,169,110,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,219,200,0.1)_0%,transparent_50%)]" />
            <div className="grain absolute inset-0" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
            <p className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light bg-white/5 rounded-full backdrop-blur-sm border border-gold/20">
              快乐盛餐 · Connection
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              HFHY Dinner
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4">
              A curated healthy dining experience inspired by Diner en Blanc.
              Elegance meets wellness at the communal table.
            </p>
            <p className="text-sm text-gold-light/70 italic mb-12">
              Happy Food, Happy You · 快乐盛餐
            </p>
            <CountdownTimer
              targetDate="2026-07-20T18:00:00+08:00"
              label="Dinner begins in"
            />
          </div>
        </section>

        {/* Concept */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                  The Concept
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Where Elegance
                  <br />
                  <span className="text-gold">Meets Wellness</span>
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Inspired by the all-white picnic format of Diner en Blanc,
                  reimagined as a celebration of health, balance, and long-term
                  wellbeing. We keep the elegance and beauty, but with healthier
                  food and experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground-muted">Beautiful outdoor venue with communal long tables</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground-muted">Lighter, nutrient-dense menus with clear nutrition labelling</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground-muted">From exclusivity to aspirational but more inclusive pricing</p>
                  </div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl bg-background-soft border border-gold/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:border-gold/30"
                  >
                    <div className="text-2xl mb-4">{feature.icon}</div>
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                The Menu
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                A Curated Healthy Dining Experience
              </h2>
              <p className="mt-4 text-foreground-muted max-w-lg mx-auto">
                Focused on vegetables, healthy fats, and lean proteins. Every
                dish is delicious and aligned with long-term health.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {menuHighlights.map((section) => (
                <div
                  key={section.category}
                  className="p-8 rounded-2xl bg-white border border-gold/10 shadow-elevated"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4 pb-3 border-b border-gold/10">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground-muted"
                      >
                        <span className="text-gold mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-background-soft border border-gold/10 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Date</p>
                <p className="font-heading text-2xl font-bold text-foreground">20 July 2026</p>
                <p className="text-sm text-foreground-muted mt-1">Saturday Evening</p>
              </div>
              <div className="p-8 rounded-2xl bg-background-soft border border-gold/10 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Time</p>
                <p className="font-heading text-2xl font-bold text-foreground">6:00 PM</p>
                <p className="text-sm text-foreground-muted mt-1">Sunset Arrival</p>
              </div>
              <div className="p-8 rounded-2xl bg-background-soft border border-gold/10 shadow-elevated text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">Dress Code</p>
                <p className="font-heading text-2xl font-bold text-foreground">All White</p>
                <p className="text-sm text-foreground-muted mt-1">Elegant & Comfortable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="py-24 lg:py-32 bg-background-soft">
          <div className="max-w-xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Registration
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reserve Your Seat
              </h2>
              <p className="text-foreground-muted">
                Limited seats at the communal table. Secure your place for an
                unforgettable evening.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gold/10 shadow-elevated">
              <RegistrationForm eventType="hfhy_dinner" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
