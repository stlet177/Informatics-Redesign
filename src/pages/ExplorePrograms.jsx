import Container from "../components/Container";
import {
  GraduationCap,
  Building2,
  Rocket,
  Compass,
  Link as LinkIcon,
} from "lucide-react";
import { BRAND_LIGHT } from "../lib/brand";

const LIGHT_BLUE = "#38bdf8";
const LIGHT_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#bae6fd] px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-[#7dd3fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

const SECTION_CONTENT = [
  {
    id: "senior-high",
    label: "Senior High",
    title: "Senior High School Tracks",
    blurb:
      "Be college and career-ready with industry-relevant tracks, and world-class flexible learning.",
    groups: [
      {
        title: "Academic Tracks",
        items: [
          "Arts, Social Sciences, and Humanities",
          "Business and Entrepreneurship",
          "Science, Technology, Engineering, and Mathematics",
        ],
      },
      {
        title: "Technical-Professional (TechPro) Tracks",
        items: [
          "Technical Drafting",
          "Animation",
          "Illustration",
          "Visual Graphic Design",
          "Computer Programming (Java)",
          "Computer Systems Servicing",
          "Contact Center Services",
        ],
      },
    ],
    cta: { label: "View Senior High Details", href: "#/programs/shs" },
    icon: GraduationCap,
    tone: "blue",
  },
  {
    id: "higher-ed",
    label: "Higher Education",
    title: "Higher Education Programs",
    blurb: undefined,
    groups: [
      {
        title: "College Programs",
        items: [
          "BS Computer Science (BSCS)",
          "BS Information Systems (BSIS)",
          "BS Information Technology (BSIT)",
          "BS Business Administration Major in Marketing Management (BSBA – MM)",
          "BS Office Administration (BSOA)",
        ],
      },
      {
        title: "Associate Diploma Programs (ACT)",
        lead:
          "Fast-track your career in just 2 years with hands-on training and industry-ready skills—your pathway to immediate employment or a full degree.",
        items: [
          "ACT with Specialization in Application Development",
          "ACT with Specialization in Multimedia",
          "ACT with Specialization in Networking",
        ],
      },
      {
        title: "Diploma Programs",
        lead:
          "Build your career foundation in 3 years with practical training, industry-focused skills, and a clear pathway to employment or continuing toward a full degree.",
        items: [
          "Diploma in Information Technology (DIT)",
          "Diploma in Computer Science (DCS)",
          "Diploma in Information Systems (DIS)",
        ],
      },
    ],
    cta: { label: "View Higher Education Details", href: "#/programs#academic" },
    icon: Building2,
    tone: "slate",
  },
  {
    id: "imc",
    label: "Microcredentials",
    title: "Informatics Microcredential Courses (IMC)",
    blurb: undefined,
    groups: [
      {
        title: "Certificate Programs",
        items: [
          "2D Animation",
          "3D Animation",
          "Bookkeeping",
          "Computer Systems Servicing",
          "Contact Center Services",
          "Creative Web Design",
          "Technical Drafting",
          "Visual Graphics Design",
          "Web Development",
        ],
      },
    ],
    cta: { label: "Explore Microcredentials", href: "https://imc.informatics.edu.ph", external: true },
    icon: Rocket,
    tone: "sky",
  },
];

const PATHWAYS = SECTION_CONTENT.map((section) => ({
  id: section.id,
  title: section.title,
  description:
    section.id === "imc"
      ? "Gain in-demand skills quickly through flexible certificate programs—your fastest pathway to career growth and new opportunities."
      : section.blurb ?? "Discover guided pathways, academic advisement, and career-ready support for this track.",
  cta: section.cta,
  icon: section.icon,
}));

const Hero = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, rgba(14,165,233,0.25) 100%)` }}
  >
    <Container className="relative z-10 max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6 text-slate-900">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 shadow-sm">
            <Compass size={16} color={LIGHT_BLUE} /> Paths at Informatics
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="font-black" style={{ color: "#0097FF" }}>
              Informatics
            </span>{" "}
            Programs
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Map out your next move—whether you’re preparing for college, deepening your expertise, or collecting industry credentials.
          </p>
          <div className="flex flex-wrap gap-3">
            {SECTION_CONTENT.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-600 transition hover:border-sky-300 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
        <div className="relative hidden max-w-sm self-stretch rounded-3xl bg-white/80 p-6 shadow-xl md:flex md:flex-col md:justify-between">
          <div className="space-y-2 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Why choose Informatics?</p>
            <p>• Industry-aligned curriculum</p>
            <p>• Flexible study pathways</p>
            <p>• Scholarship & financial support</p>
            <p>• Lifelong career services</p>
          </div>
          <a
            href="#/admissions"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0097ff] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0588e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </Container>
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25)_0%,_transparent_55%)]" aria-hidden />
  </section>
);

const Pathways = () => (
  <section className="py-16 md:py-20">
    <Container className="max-w-6xl space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Program Pathways</h2>
        <p className="text-sm text-slate-600 md:text-base">
          Select where you are today and jump directly into the section that fits your goals.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PATHWAYS.map((path, index) => (
          <article
            key={path.id}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                <path.icon size={24} color={LIGHT_BLUE} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{path.title}</h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-slate-600">{path.description}</p>
            <a
              href={path.cta.href}
              target={path.cta.external ? "_blank" : undefined}
              rel={path.cta.external ? "noopener noreferrer" : undefined}
              className={`${LIGHT_BUTTON_CLASS} w-fit`}
            >
              {path.cta.label}
            </a>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

const GroupList = ({ group }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-semibold text-slate-900">{group.title}</h4>
    {group.lead ? <p className="text-sm text-slate-600">{group.lead}</p> : null}
    <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2 md:gap-3">
      {group.items.map((item) => (
        <li
          key={item}
          className="relative rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2 pl-6"
        >
          <span
            className="absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
            style={{ background: LIGHT_BLUE }}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProgramSection = ({ section }) => (
  <section id={section.id} className="py-16 md:py-20">
    <Container className="max-w-6xl">
      <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              <section.icon size={16} color={LIGHT_BLUE} />
              {section.label}
            </span>
            <div className="flex items-start gap-2">
              <h2 className="text-3xl font-bold text-slate-900" id={`${section.id}-heading`}>
                {section.title}
              </h2>
              <a
                href={`#${section.id}`}
                className="mt-1 inline-flex items-center justify-center rounded-full border border-transparent p-1 text-slate-400 transition hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                aria-label={`Copy link to ${section.title}`}
              >
                <LinkIcon size={16} />
              </a>
            </div>
            {section.blurb ? (
              <p className="max-w-3xl text-base leading-relaxed text-slate-600">{section.blurb}</p>
            ) : null}
          </div>
          <a
            href={section.cta.href}
            target={section.cta.external ? "_blank" : undefined}
            rel={section.cta.external ? "noopener noreferrer" : undefined}
            className={LIGHT_BUTTON_CLASS}
          >
            {section.cta.label}
          </a>
        </div>

        <div className="mt-10 space-y-8">
          {section.groups.map((group) => (
            <GroupList key={group.title} group={group} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const GlobalCTA = () => (
  <section className="py-20" style={{ background: `linear-gradient(120deg, ${BRAND_LIGHT} 0%, rgba(148,163,184,0.15) 100%)` }}>
    <Container className="max-w-4xl text-center">
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
        Talk with our Enrollment Specialist
      </h2>
      <p className="mt-3 text-base text-slate-600 md:text-lg">
        Get matched with the right Informatics pathway, explore scholarship opportunities, and map out the next steps toward your goals.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href="#/contact" className={LIGHT_BUTTON_CLASS}>
          Schedule a Call
        </a>
        <a
          href="#/admissions"
          className="inline-flex items-center justify-center rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          Admissions Overview
        </a>
      </div>
    </Container>
  </section>
);

export default function ExplorePrograms() {
  return (
    <main className="pt-24 md:pt-28" style={{ background: "#f8fafc" }}>
      <Hero />
      <Pathways />
      {SECTION_CONTENT.map((section) => (
        <ProgramSection key={section.id} section={section} />
      ))}
      <GlobalCTA />
    </main>
  );
}
