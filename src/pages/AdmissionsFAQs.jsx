import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT } from "../lib/brand";

const FAQ_ITEMS = [
  {
    question: "When do classes start?",
    answer: "Our primary intake begins in August, with rolling admissions for select programs throughout the year. Check with your chosen campus for specific start dates.",
  },
  {
    question: "How long does application review take?",
    answer: "Once we receive your complete requirements, expect a response within 3–5 business days via email or SMS.",
  },
  {
    question: "Can I apply before taking the entrance assessment?",
    answer: "Yes. You may submit your application while scheduling the assessment. Just make sure to complete it before enrollment confirmation.",
  },
  {
    question: "Do you accept transferees or second-degree applicants?",
    answer: "Absolutely. Submit your transcript of records, honorable dismissal, and course descriptions so our academic team can evaluate credit transfers.",
  },
  {
    question: "Are scholarships available for working professionals?",
    answer: "Yes. We offer merit and partner-funded grants that support professionals pursuing microcredentials or degree pathways.",
  },
  {
    question: "What financial documents are needed for aid applications?",
    answer: "Requirements vary per program, but typically include proof of income, a completed aid form, and supporting certificates from employers or sponsors.",
  },
];

export default function AdmissionsFAQs() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-slate-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
            Admissions Answers
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base text-slate-700 md:text-lg">
            Browse the most common questions about applications, enrollment, and financial support. Didn’t find what you’re looking for? Our admissions counselors are one message away.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="max-w-4xl space-y-4">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-semibold" style={{ color: BRAND_DARK }}>
                  {question}
                </span>
                <span className="text-sm font-semibold text-blue-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {answer}
              </p>
            </details>
          ))}
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>
            Still need help?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Reach out to our admissions team for personalized guidance or schedule a campus visit to speak with us in person.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#/contact" className="simple-btn simple-btn--primary">
              Contact Admissions
            </a>
            <a href="#/admissions" className="simple-btn simple-btn--outline">
              View Admissions Overview
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

