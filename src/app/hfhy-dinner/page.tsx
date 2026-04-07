"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer } from "@/components/Layout";

/* ──────────────────────────────────────────────
   Countdown Timer
   ────────────────────────────────────────────── */

function CountdownTimer({ targetDate, label }: { targetDate: string; label?: string }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = timeLeft
    ? [{ value: timeLeft.days, label: "Days" }, { value: timeLeft.hours, label: "Hours" }, { value: timeLeft.minutes, label: "Minutes" }, { value: timeLeft.seconds, label: "Seconds" }]
    : [{ value: 0, label: "Days" }, { value: 0, label: "Hours" }, { value: 0, label: "Minutes" }, { value: 0, label: "Seconds" }];

  return (
    <div>
      {label && <p className="mb-6 text-center text-sm uppercase tracking-wider text-white/60">{label}</p>}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20">
                <span className="font-heading text-2xl font-bold tabular-nums text-white sm:text-3xl">{mounted && timeLeft ? String(unit.value).padStart(2, "0") : "--"}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/50">{unit.label}</p>
            </div>
            {i < units.length - 1 && <span className="mb-6 text-xl font-light text-white/30">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Registration Form (Dinner)
   ────────────────────────────────────────────── */

function DinnerRegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1500);
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-gold/5 px-8 py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground">You&apos;re In!</h3>
        <p className="text-foreground-muted">Thank you for joining the experience. Check your email for confirmation details.</p>
      </div>
    );
  }

  const ic = "w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/10";
  const lc = "mb-1.5 block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label className={lc}>Full Name</label><input required placeholder="Your full name" className={ic} /></div>
      <div><label className={lc}>Email</label><input required type="email" placeholder="you@example.com" className={ic} /></div>
      <div><label className={lc}>Phone (optional)</label><input type="tel" placeholder="+65 9123 4567" className={ic} /></div>
      <div>
        <label className={lc}>Ticket Type</label>
        <select className={ic}>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="vip">VIP</option>
        </select>
      </div>
      <div>
        <label className={lc}>Dietary Preferences</label>
        <select className={ic}>
          <option value="">Select preference</option>
          <option value="no_restriction">No Restriction</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="halal">Halal</option>
          <option value="gluten_free">Gluten Free</option>
        </select>
      </div>
      <div><label className={lc}>Allergies (optional)</label><input placeholder="Any food allergies?" className={ic} /></div>
      <div><label className={lc}>Additional Guests</label><input type="number" min={0} max={5} placeholder="0" className={ic} /></div>
      <button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-to-r from-gold to-[#9ACBEB] px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(126,184,224,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? <span className="flex items-center justify-center gap-2"><svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</span> : "Reserve Your Seat"}
      </button>
    </form>
  );
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const features = [
  { icon: "🕯️", title: "Elegant Atmosphere", description: "Beautiful outdoor venue with warm lighting, candles, flowers, and music creating a magical setting." },
  { icon: "🥗", title: "Healthy Cuisine", description: "Lighter, balanced, nutrient-dense menus focused on vegetables, healthy fats, and lean proteins." },
  { icon: "🍷", title: "Mindful Beverages", description: "Alcohol-optional with low-sugar drink options. Enjoy without compromise." },
  { icon: "🤝", title: "Meaningful Connection", description: "Communal long tables designed to spark authentic conversation and genuine bonds." },
];

const menuHighlights = [
  { category: "Starters", items: ["Seasonal garden salad with citrus vinaigrette", "Cold-pressed soup of the day"] },
  { category: "Mains", items: ["Herb-crusted sustainable fish", "Plant-forward grain bowl with tahini"] },
  { category: "Dessert", items: ["Raw cacao & avocado mousse", "Seasonal fruit platter with honey drizzle"] },
  { category: "Beverages", items: ["Botanical infused water", "Cold-pressed juices", "Optional wine pairing"] },
];

/* ──────────────────────────────────────────────
   HFHY Dinner Page
   ────────────────────────────────────────────── */

export default function HFHYDinnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D2036] to-[#0B3C7C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(126,184,224,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,219,200,0.1)_0%,transparent_50%)]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[14vw] font-bold uppercase leading-none tracking-tight text-white/[0.03]">HFHY DINNER</span>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8">
            <p className="mb-6 inline-block rounded-full border border-gold/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">快乐盛餐 · Connection</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">HFHY Dinner</h1>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-white/60 md:text-xl">A curated healthy dining experience inspired by Diner en Blanc. Elegance meets wellness at the communal table.</p>
            <p className="mb-12 text-sm italic text-gold-light/70">Happy Food, Happy You · 快乐盛餐</p>
            <CountdownTimer targetDate="2026-07-20T18:00:00+08:00" label="Dinner begins in" />
          </div>
        </section>

        {/* Concept */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Concept</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">Where Elegance<br /><span className="text-gold">Meets Wellness</span></h2>
                <p className="mb-6 leading-relaxed text-foreground-muted">Inspired by the all-white picnic format of Diner en Blanc, reimagined as a celebration of health, balance, and long-term wellbeing. We keep the elegance and beauty, but with healthier food and experiences.</p>
                <div className="space-y-4">
                  {["Beautiful outdoor venue with communal long tables", "Lighter, nutrient-dense menus with clear nutrition labelling", "From exclusivity to aspirational but more inclusive pricing"].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <svg className="h-3 w-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <p className="text-sm text-foreground-muted">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="group rounded-2xl border border-gold/10 bg-background-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-elevated">
                    <div className="mb-4 text-2xl">{f.icon}</div>
                    <h3 className="mb-2 font-heading text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-foreground-muted">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Menu</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">A Curated Healthy Dining Experience</h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">Focused on vegetables, healthy fats, and lean proteins. Every dish is delicious and aligned with long-term health.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {menuHighlights.map((s) => (
                <div key={s.category} className="rounded-2xl border border-gold/10 bg-white p-8 shadow-elevated">
                  <h3 className="mb-4 border-b border-gold/10 pb-3 font-heading text-lg font-semibold text-foreground">{s.category}</h3>
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <span className="mt-0.5 text-gold">·</span>{item}
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Date</p>
                <p className="font-heading text-2xl font-bold text-foreground">20 July 2026</p>
                <p className="mt-1 text-sm text-foreground-muted">Saturday Evening</p>
              </div>
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Time</p>
                <p className="font-heading text-2xl font-bold text-foreground">6:00 PM</p>
                <p className="mt-1 text-sm text-foreground-muted">Sunset Arrival</p>
              </div>
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Dress Code</p>
                <p className="font-heading text-2xl font-bold text-foreground">All White</p>
                <p className="mt-1 text-sm text-foreground-muted">Elegant & Comfortable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Registration</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">Reserve Your Seat</h2>
              <p className="text-foreground-muted">Limited seats at the communal table. Secure your place for an unforgettable evening.</p>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-white p-8 shadow-elevated">
              <DinnerRegistrationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
