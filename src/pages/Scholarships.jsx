import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { admissionsConfig } from "../lib/content.config";
import { navigateHash } from "../lib/navigation";

export default function Scholarships() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="max-w-5xl">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: BRAND_BLUE }}>
            Funding Pathways
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>
            Scholarships & Grants
          </h1>
          <p className="mt-3 text-base text-slate-700 md:text-lg">
            Informatics partners with industry, government, and philanthropic organizations to make world-class education within reach. Explore merit-based awards, partner-funded grants, and need-based assistance designed for diverse learners.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {admissionsConfig.scholarships.map((scholarship, index) => (
              <div key={scholarship.title ?? index} className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
                <h2 className="text-lg font-semibold" style={{ color: BRAND_DARK }}>
                  {scholarship.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                  {scholarship.desc}
                </p>
                <button
                  type="button"
                  onClick={() => navigateHash(scholarship.href)}
                  className="simple-btn simple-btn--primary mt-6 self-start"
                >
                  {scholarship.cta}
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>
            Need Personalized Guidance?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our scholarship advisors can help you combine grants, sponsorships, and tuition plans tailored to your goals. Connect with us to start your application.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#/contact" className="simple-btn simple-btn--primary">
              Talk to Scholarship Advisor
            </a>
            <a href="#/admissions/tuition" className="simple-btn simple-btn--outline">
              Explore Tuition Options
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

