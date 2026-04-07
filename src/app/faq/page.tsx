import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const generalFAQ = [
  {
    question: "What is the ILEA Lifestyle Experience Series?",
    answer: "It is a curated lifestyle platform that blends movement, wellbeing, and social connection into meaningful, premium experiences. We currently offer two sub-experiences: Walk The World (outdoor walking) and HFHY Dinner (curated healthy dining).",
  },
  {
    question: "Who is this for?",
    answer: "Anyone who values health, meaningful social connection, and beautiful experiences. Our events are premium but accessible — designed for people who want to live more intentionally without it feeling like a lecture or a bootcamp.",
  },
  {
    question: "How do I register?",
    answer: "Visit the event page for either Walk The World or HFHY Dinner and fill in the registration form. You will receive a confirmation email after completing the registration and payment.",
  },
  {
    question: "Can I get a refund?",
    answer: "Please contact us directly for refund requests. We handle each case individually and aim to be fair and accommodating.",
  },
];

const walkFAQ = [
  {
    question: "How long is the walk?",
    answer: "The scenic route is approximately 5 kilometers. It is designed for all fitness levels — this is not a race, it is an experience. We walk at a comfortable, social pace.",
  },
  {
    question: "What should I bring?",
    answer: "Comfortable walking shoes, a water bottle, sunscreen, and a hat. We provide a welcome pack with essentials at check-in.",
  },
  {
    question: "Is it suitable for all fitness levels?",
    answer: "Yes! The walk is designed to be enjoyable for everyone. There are rest stations along the route and the pace is relaxed and social.",
  },
  {
    question: "What happens if it rains?",
    answer: "We monitor weather closely. If conditions are unsafe, we will reschedule and notify all registered participants via email at least 24 hours in advance.",
  },
];

const dinnerFAQ = [
  {
    question: "What is the dress code?",
    answer: "All white — elegant and comfortable. Think summer garden party. The dress code adds to the collective atmosphere and visual experience.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes. We cater to vegetarian, vegan, pescatarian, halal, and gluten-free diets. Please select your preference during registration and note any allergies.",
  },
  {
    question: "Is alcohol served?",
    answer: "We offer an alcohol-optional menu with low-sugar drink options, botanical infusions, and cold-pressed juices. Optional wine pairing is available for those who prefer.",
  },
  {
    question: "Where is the dinner held?",
    answer: "The venue is a beautiful outdoor location that will be revealed closer to the event date. Registered guests will receive the exact location via email 48 hours before the dinner.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-10 bg-background-soft">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              FAQ
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-foreground-muted text-lg">
              Everything you need to know about our experiences.
            </p>
          </div>
        </section>

        {/* General */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              General
            </h2>
            <FAQ items={generalFAQ} />
          </div>
        </section>

        {/* Walk The World */}
        <section className="py-16 bg-background-soft">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Walk The World
            </h2>
            <FAQ items={walkFAQ} />
          </div>
        </section>

        {/* HFHY Dinner */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              HFHY Dinner
            </h2>
            <FAQ items={dinnerFAQ} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
