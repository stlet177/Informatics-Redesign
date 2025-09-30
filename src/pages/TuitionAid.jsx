import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { FcMoneyTransfer, FcOk, FcLike } from "react-icons/fc";

const tuitionHighlights = [
  {
    title: "Installment Plans",
    copy: "Spread tuition across monthly or quarterly installments that match your preferred budgeting cycle.",
    Icon: FcMoneyTransfer,
  },
  {
    title: "Corporate & Partner Discounts",
    copy: "Unlock special rates through partner schools, companies, LGUs, and government programs.",
    Icon: FcOk,
  },
  {
    title: "Financial Aid Support",
    copy: "Let our counselors guide you through CHED, TESDA, and school-based assistance options.",
    Icon: FcLike,
  },
];

const supportSteps = [
  {
    title: "Talk to an Enrollment Advisor",
    detail: "Schedule a consultation to review program fit, total fees, and available discounts.",
  },
  {
    title: "Choose Your Payment Plan",
    detail: "Select from flexible installment schedules or partner-backed arrangements that suit your timeline.",
  },
  {
    title: "Submit Supporting Documents",
    detail: "Provide your application form, valid ID, and any scholarship or financial aid requirements.",
  },
  {
    title: "Confirm Your Enrollment",
    detail: "Finalize your slot once payment arrangements are set and approval is confirmed.",
  },
];

export default function TuitionAid() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container>
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: BRAND_BLUE }}>
              Admissions Support
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>
              Tuition & Financial Aid
            </h1>
            <p className="mt-3 text-base text-slate-700 md:text-lg">
              Investing in your future is a big decision. Informatics offers flexible payment pathways and dedicated counselors so you can focus on learning while we help you manage the details.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {tuitionHighlights.map(({ title, copy, Icon }) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    <Icon />
                  </div>
                  <h2 className="text-lg font-semibold" style={{ color: BRAND_DARK }}>
                    {title}
                  </h2>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>
            How We Support Your Journey
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {supportSteps.map(({ title, detail }, index) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                  Step {index + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold" style={{ color: BRAND_DARK }}>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>
            Ready to Plan Your Tuition?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Connect with our admissions team to explore scholarships, flexible payment plans, or corporate sponsorship options tailored to your goals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#/contact"
              className="simple-btn simple-btn--primary"
            >
              Talk to Admissions
            </a>
            <a
              href="#/admissions"
              className="simple-btn simple-btn--outline"
            >
              Back to Admissions
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
