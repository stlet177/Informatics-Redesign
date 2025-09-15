import Container from "../components/Container";
import FeatureStats from "../components/FeatureStats";
import ProgramCard from "../components/ProgramCard";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { programsConfig } from "../lib/content.config";

export default function ProgramsIndex() {
  const imgMap = {
    "BS Information Technology": asset("assets/informationtechnology.jpg"),
    "BS Computer Science": asset("assets/computerscience.jpg"),
    "BS Information Systems": asset("assets/Informationsystem.jpg"),
    "BS Business Administration (Business Analytics)": asset("assets/BSBA.jpg"),
  };
  return (
    <main className="pt-24 md:pt-28">
      {/* Program Features */}
      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>Programs</h1>
          <p className="mt-2 text-slate-700">Schedules, events, key stats, and our unique strengths.</p>
          <div className="mt-6">
            <FeatureStats items={[
              { value: "Rolling", label: "Applications" },
              { value: "Aug 2025", label: "Classes Start" },
              { value: "Industry", label: "Aligned Curriculum" },
              { value: "Pathways", label: "Certs + Degrees" },
            ]} />
          </div>
        </Container>
      </section>

      {/* Academic Programs */}
      <section id="academic" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Academic Programs</h2>
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {programsConfig.academic.map((p, i) => (
              <ProgramCard key={p.key} icon={() => null} title={p.title} desc={p.blurb} img={imgMap[p.title]} delay={i * 0.06} href={p.route} />
            ))}
          </div>
        </Container>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Certificate Programs</h2>
            <a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: BRAND_BLUE }}>Short Courses → IMC</a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {programsConfig.certificates.map((c) => (
              <div key={c.key} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm flex flex-col">
                <div className="font-semibold" style={{ color: BRAND_DARK }}>{c.title}</div>
                <p className="mt-2 text-sm text-slate-600 flex-1">{c.blurb}</p>
                {c.externalLink ? (
                  <a href={c.externalLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white" style={{ background: BRAND_BLUE }}>Learn more</a>
                ) : (
                  <a href={c.enrollmentLink || "#/contact"} className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white" style={{ background: BRAND_BLUE }}>Enroll</a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

