import Container from "../components/Container";
import {
  GraduationCap,
  Building2,
  Rocket,
  Compass,
  ArrowUpRight,
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
          { label: "Arts, Social Sciences, and Humanities", href: "#/programs/shs/humss" },
          { label: "Business and Entrepreneurship", href: "#/programs/shs/abm" },
          { label: "Science, Technology, Engineering, and Mathematics", href: "#/programs/shs/stem" },
        ],
      },
      {
        title: "Technical-Professional (TechPro) Tracks",
        items: [
          { label: "Technical Drafting", href: "#/programs/shs/technical-drafting" },
          { label: "Animation", href: "#/programs/shs/animation" },
          { label: "Illustration", href: "#/programs/shs/illustration" },
          { label: "Visual Graphic Design", href: "#/programs/shs/visual-graphic-design" },
          { label: "Computer Programming (Java)", href: "#/programs/shs/computer-programming" },
          { label: "Computer Systems Servicing", href: "#/programs/shs/computer-systems-servicing" },
          { label: "Contact Center Services", href: "#/programs/shs/contact-center-services" },
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
          {
            label: "BSBA - Bachelor of Science in Business Administration",
            href: "#/programs/college/bsba",
          },
          {
            label: "BSCS - Bachelor of Science in Computer Science",
            href: "#/programs/college/bscs",
          },
          {
            label: "BSIS - Bachelor of Science in Information Systems",
            href: "#/programs/college/bsis",
          },
          {
            label: "BSIT - Bachelor of Science in Information Technology",
            href: "#/programs/college/bsit",
          },
          {
            label: "BSOA - Bachelor of Science in Office Administration",
            href: "#/programs/college/bsoa",
          },
        ],
      },
      {
        title: "Associate Diploma Programs (ACT)",
        lead:
          "Fast-track your career in just 2 years with hands-on training and industry-ready skills—your pathway to immediate employment or a full degree.",
        items: [
          { label: "ACT with Specialization in Application Development", href: "#/programs/explore/associate-diploma-programs" },
          { label: "ACT with Specialization in Multimedia", href: "#/programs/explore/associate-diploma-programs" },
          { label: "ACT with Specialization in Networking", href: "#/programs/explore/associate-diploma-programs" },
        ],
      },
      {
        title: "Diploma Programs",
        lead:
          "Build your career foundation in 3 years with practical training, industry-focused skills, and a clear pathway to employment or continuing toward a full degree.",
        items: [
          { label: "Diploma in Information Technology (DIT)", href: "#/programs/explore/diploma-programs" },
          { label: "Diploma in Computer Science (DCS)", href: "#/programs/explore/diploma-programs" },
          { label: "Diploma in Information Systems (DIS)", href: "#/programs/explore/diploma-programs" },
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
          { label: "Cybersecurity Specialist", href: "https://imc.informatics.edu.ph/career-details/02f69e11-c4f1-4556-a04a-e6c5e5b1f027", external: true },
          { label: "Software Developer", href: "https://imc.informatics.edu.ph/career-details/bccf4b99-deec-4e93-98d7-84b0bf16c376", external: true },
          { label: "Web Developer", href: "https://imc.informatics.edu.ph/career-details/0bd263a9-b118-4e18-9a2b-71ae7a1bdc22", external: true },
          { label: "Data Science", href: "https://imc.informatics.edu.ph/career-details/cad306b7-a9c5-4a00-a081-bf14521e1134", external: true },
          { label: "Level 1: AI Essentials", href: "https://imc.informatics.edu.ph/career-details/314438bf-b22d-49f1-a43a-15d09829dd0c", external: true },
          { label: "Level 2: Certified AI Professional - AI for Non-IT Practitioners", href: "https://imc.informatics.edu.ph/career-details/e80686e0-5905-468a-89e2-a46ba0c65d81", external: true },
          { label: "Level 3: Certified AI Professional - AI for Tech", href: "https://imc.informatics.edu.ph/career-details/da2191f1-0d91-4996-8f39-f7394b77b23e", external: true },
          { label: "Digital Transformation", href: "https://imc.informatics.edu.ph/career-details/29632520-6c02-4065-8f3e-b665c5475bbc", external: true },
          { label: "Digital Marketing and Sales Learning", href: "https://imc.informatics.edu.ph/career-details/1e60e7db-db4d-4512-bc55-4eca505fd0bc", external: true },
          { label: "Professional Improvement Learning Paths", href: "https://imc.informatics.edu.ph/career-details/b791f981-2367-4429-9be6-0079ed18aa51", external: true },
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
  targetId: section.id,
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
              href={`#${path.targetId}`}
              onClick={(event) => {
                event.preventDefault();
                const target = document.getElementById(path.targetId);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#${path.targetId}`);
                }
              }}
              className={`${LIGHT_BUTTON_CLASS} w-fit`}
            >
              {path.cta?.label ?? "Learn more"}
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
      {group.items.map((item) => {
        const itemData = typeof item === "string" ? { label: item } : item;
        const key = itemData.label ?? item;
        const { href, external } = itemData;

        return (
          <li
            key={key}
            className="group relative rounded-xl border border-slate-100 bg-slate-50/80 transition hover:border-sky-200 hover:bg-sky-50"
          >
            <span
              className="pointer-events-none absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
              style={{ background: LIGHT_BLUE }}
              aria-hidden
            />
            {href ? (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="block px-4 py-2 pl-6 text-sm font-medium text-slate-700 transition group-hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {itemData.label}
              </a>
            ) : (
              <span className="block px-4 py-2 pl-6 text-sm text-slate-700">{itemData.label}</span>
            )}
          </li>
        );
      })}
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
              <a
                href={section.id === "senior-high" ? "#/programs/shs" : section.id === "higher-ed" ? "#/programs#academic" : section.id === "imc" ? "https://imc.informatics.edu.ph" : `#${section.id}`}
                onClick={(event) => {
                  const link = event.currentTarget;
                  const href = link.getAttribute("href") ?? "#";
                  if (href.startsWith("#") && !href.startsWith("#/")) {
                    event.preventDefault();
                    const target = document.getElementById(href.replace(/^#/, ""));
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.history.replaceState(null, "", href);
                    }
                  } else {
                    window.location.assign(href);
                  }
                }}
                className="group inline-flex items-center gap-3 text-3xl font-bold text-slate-900 transition hover:text-sky-600"
                id={`${section.id}-heading`}
              >
                <span>{section.title}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-500 transition group-hover:bg-sky-100 group-hover:text-sky-600">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
            {section.blurb ? (
              <p className="max-w-3xl text-base leading-relaxed text-slate-600">{section.blurb}</p>
            ) : null}
          </div>
          {section.cta && section.id === "senior-high" ? null : section.cta && section.id === "higher-ed" ? null : section.cta && section.id === "imc" ? null : section.cta ? (
            <a
              href={section.cta.href}
              target={section.cta.external ? "_blank" : undefined}
              rel={section.cta.external ? "noopener noreferrer" : undefined}
              className={LIGHT_BUTTON_CLASS}
            >
              {section.cta.label}
            </a>
          ) : null}
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
