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
    ? [
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ]
    : [{ value: 0, label: "Days" }, { value: 0, label: "Hours" }, { value: 0, label: "Minutes" }, { value: 0, label: "Seconds" }];

  return (
    <div>
      {label && <p className="mb-6 text-center text-sm uppercase tracking-wider text-white/60">{label}</p>}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20">
                <span className="font-heading text-2xl font-bold tabular-nums text-white sm:text-3xl">
                  {mounted && timeLeft ? String(unit.value).padStart(2, "0") : "--"}
                </span>
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
   Registration Form
   ────────────────────────────────────────────── */

function RegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketType, setTicketType] = useState("individual");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1500);
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-blue-primary/20 bg-blue-primary/5 px-8 py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-primary/10">
          <svg className="h-8 w-8 text-blue-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground">You&apos;re In!</h3>
        <p className="text-foreground-muted">Thank you for joining the experience. Check your email for confirmation details.</p>
      </div>
    );
  }

  const ic = "w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-blue-primary/30 focus:outline-none focus:ring-2 focus:ring-blue-primary/10";
  const lc = "mb-1.5 block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label className={lc}>Full Name</label><input required placeholder="Your full name" className={ic} /></div>
      <div><label className={lc}>Email</label><input required type="email" placeholder="you@example.com" className={ic} /></div>
      <div><label className={lc}>Phone (optional)</label><input type="tel" placeholder="+65 9123 4567" className={ic} /></div>
      <div>
        <label className={lc}>Ticket Type</label>
        <select value={ticketType} onChange={(e) => setTicketType(e.target.value)} className={ic}>
          <option value="individual">Individual</option>
          <option value="couple">Couple</option>
          <option value="group">Group (3-10 pax)</option>
        </select>
      </div>
      {ticketType === "group" && <div><label className={lc}>Group Size</label><input type="number" min={3} max={10} placeholder="3-10" className={ic} /></div>}
      <div><label className={lc}>Emergency Contact (optional)</label><input placeholder="Name & phone number" className={ic} /></div>
      <button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-to-r from-blue-primary to-[#3B8BEB] px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(30,111,217,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? <span className="flex items-center justify-center gap-2"><svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processing...</span> : "Join This Experience"}
      </button>
    </form>
  );
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const highlights = [
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Scenic Routes", description: "Walk through beautiful outdoor locations carefully selected for their natural beauty and energy." },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Community", description: "Connect with like-minded individuals who value movement, health, and meaningful social experiences." },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: "Wellness Activities", description: "Experience guided wellness moments including mindful breathing, stretching, and group activities." },
  { icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: "Fresh Energy", description: "Start your day with movement in daylight — proven to boost mood, energy, and long-term health." },
];

const schedule = [
  { time: "7:00 AM", activity: "Check-in & Welcome", detail: "Registration, welcome pack, group stretching" },
  { time: "7:30 AM", activity: "The Walk Begins", detail: "Guided scenic walk with wellness stations along the route" },
  { time: "9:00 AM", activity: "Wellness Station", detail: "Mindful breathing, group activity, refreshments" },
  { time: "10:00 AM", activity: "Finish & Celebrate", detail: "Community gathering, photos, post-walk refreshments" },
];

/* ──────────────────────────────────────────────
   Walk The World Page
   ────────────────────────────────────────────── */

export default function WalkTheWorldPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0B3C7C]">
            <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
              <source src="/videos/hero-walk.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[14vw] font-bold uppercase leading-none tracking-tight text-white/[0.05]">WALK THE WORLD</span>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8">
            <p className="mb-6 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">天行健 · Activation</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">Walk The World</h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 md:text-xl">An outdoor walking experience that blends movement, nature, and community. Step into daylight, fresh energy, and intentional connection.</p>
            <CountdownTimer targetDate="2026-06-15T07:00:00+08:00" label="Event starts in" />
          </div>
        </section>

        {/* What To Expect */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">What To Expect</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">More Than a Walk</h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">Every element is designed to activate your body, mind, and social connection.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.title} className="group rounded-2xl border border-blue-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-primary/30 hover:shadow-elevated">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-primary/10 text-blue-primary transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">Schedule</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Your Morning Journey</h2>
            </div>
            <div className="space-y-0">
              {schedule.map((item, i) => (
                <div key={item.time} className="relative flex gap-6 pb-10">
                  {i < schedule.length - 1 && <div className="absolute bottom-0 left-[19px] top-10 w-px bg-blue-primary/10" />}
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-primary/20 bg-blue-primary/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-primary">{item.time}</p>
                    <h4 className="mb-1 font-heading text-lg font-semibold text-foreground">{item.activity}</h4>
                    <p className="text-sm text-foreground-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-foreground/5 bg-white p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Date</p>
                <p className="font-heading text-2xl font-bold text-foreground">15 June 2026</p>
                <p className="mt-1 text-sm text-foreground-muted">Saturday Morning</p>
              </div>
              <div className="rounded-2xl border border-foreground/5 bg-white p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Location</p>
                <p className="font-heading text-2xl font-bold text-foreground">Gardens by the Bay</p>
                <p className="mt-1 text-sm text-foreground-muted">Singapore</p>
              </div>
              <div className="rounded-2xl border border-foreground/5 bg-white p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">Distance</p>
                <p className="font-heading text-2xl font-bold text-foreground">5 KM</p>
                <p className="mt-1 text-sm text-foreground-muted">Scenic Route</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="py-24 lg:py-32">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Registration</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">Join Walk The World</h2>
              <p className="text-foreground-muted">Secure your spot in the next walking experience. Limited places available.</p>
            </div>
            <div className="rounded-2xl border border-foreground/5 bg-background-soft p-8 shadow-elevated">
              <RegistrationForm />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">Gallery</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Past Experiences</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-primary/15 to-[#2E8B57]/10">
                  <div className="absolute inset-0 flex items-center justify-center"><p className="text-sm text-foreground-muted/40">Photo {i}</p></div>
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
