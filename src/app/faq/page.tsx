"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/Layout";

/* ──────────────────────────────────────────────
   FAQ Accordion
   ────────────────────────────────────────────── */

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-foreground/5 bg-white transition-all duration-200 hover:border-blue-primary/10">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-4 font-medium text-foreground">{item.question}</span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-foreground-muted transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
            <p className="px-6 text-sm leading-relaxed text-foreground-muted">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────────── */

const generalFAQ = [
  { question: "What is the ILEA Lifestyle Experience Series?", answer: "It is a curated lifestyle platform that blends movement, wellbeing, and social connection into meaningful, premium experiences. We currently offer two sub-experiences: Walk The World (outdoor walking) and HFHY Dinner (curated healthy dining)." },
  { question: "Who is this for?", answer: "Anyone who values health, meaningful social connection, and beautiful experiences. Our events are premium but accessible — designed for people who want to live more intentionally without it feeling like a lecture or a bootcamp." },
  { question: "How do I register?", answer: "Visit the event page for either Walk The World or HFHY Dinner and fill in the registration form. You will receive a confirmation email after completing the registration and payment." },
  { question: "Can I get a refund?", answer: "Please contact us directly for refund requests. We handle each case individually and aim to be fair and accommodating." },
];

const walkFAQ = [
  { question: "How long is the walk?", answer: "The scenic route is approximately 5 kilometers. It is designed for all fitness levels — this is not a race, it is an experience. We walk at a comfortable, social pace." },
  { question: "What should I bring?", answer: "Comfortable walking shoes, a water bottle, sunscreen, and a hat. We provide a welcome pack with essentials at check-in." },
  { question: "Is it suitable for all fitness levels?", answer: "Yes! The walk is designed to be enjoyable for everyone. There are rest stations along the route and the pace is relaxed and social." },
  { question: "What happens if it rains?", answer: "We monitor weather closely. If conditions are unsafe, we will reschedule and notify all registered participants via email at least 24 hours in advance." },
];

const dinnerFAQ = [
  { question: "What is the dress code?", answer: "All white — elegant and comfortable. Think summer garden party. The dress code adds to the collective atmosphere and visual experience." },
  { question: "Can you accommodate dietary restrictions?", answer: "Yes. We cater to vegetarian, vegan, pescatarian, halal, and gluten-free diets. Please select your preference during registration and note any allergies." },
  { question: "Is alcohol served?", answer: "We offer an alcohol-optional menu with low-sugar drink options, botanical infusions, and cold-pressed juices. Optional wine pairing is available for those who prefer." },
  { question: "Where is the dinner held?", answer: "The venue is a beautiful outdoor location that will be revealed closer to the event date. Registered guests will receive the exact location via email 48 hours before the dinner." },
];

/* ──────────────────────────────────────────────
   FAQ Page
   ────────────────────────────────────────────── */

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-10 pt-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#1558B0]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">FAQ</p>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-lg text-white/70">Everything you need to know about our experiences.</p>
          </div>
        </section>

        {/* General */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">General</h2>
            <FAQAccordion items={generalFAQ} />
          </div>
        </section>

        {/* Walk The World */}
        <section className="bg-background-soft py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Walk The World</h2>
            <FAQAccordion items={walkFAQ} />
          </div>
        </section>

        {/* HFHY Dinner */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">HFHY Dinner</h2>
            <FAQAccordion items={dinnerFAQ} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
