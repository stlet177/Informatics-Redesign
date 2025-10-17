import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "../Container";
import { BRAND_BLUE, BRAND_LIGHT } from "../../lib/brand";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const WHO_CAN_APPLY = [
  { text: "Senior High School Graduates" },
  { text: "High School (Old Curriculum) Graduates" },
  {
    text: "Transferees from Other Colleges/Universities",
    children: ["Students shifting to Informatics from another school may apply for credit evaluation."],
  },
  {
    text: "Working Professionals or Second-Course Takers",
    children: [
      "For those who want to pursue a computing degree to advance or change careers.",
    ],
  },
];

const ENROLLMENT_REQUIREMENTS = [
  {
    title: "For Highschool Graduates",
    items: [
      "Completed Form 137 (Report Card) or High School card",
      "Certificate of Good Moral Character from your school",
      "PSA Birth Certificate (photocopy)",
      "2x2 ID photos (recent, white background)",
      "Duly furnished Application Form",
      "Furnished Scholarship Application Form (if applicable)",
    ],
  },
  {
    title: "For Shs Transferees",
    items: [
      "Transcript of Records (TOR) from previous school",
      "Honorable Dismissal or Transfer Credentials",
      "Course syllabus/subject descriptions (for credit evaluation)",
      "Certificate of Good Moral Character",
      "Duly furnished Application Form",
      "Furnished Scholarship Application Form (if applicable)",
    ],
  },
];

export default function ProgramPageLayout({ program }) {
  const {
    hero,
    overview,
    outcomes,
    tagline,
    careers,
    campuses,
    badge,
  } = program;

  const marqueeItems = useMemo(() => [...careers, ...careers], [careers]);

  return (
    <main className="bg-slate-50 pt-24 md:pt-28">
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, rgba(14,165,233,0.15) 100%)`,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "rgba(14,165,233,0.35)" }}
        />
        <Container className="relative z-10 grid gap-10 pb-20 pt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center md:pb-24 md:pt-20">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 shadow-sm">
              Informatics College
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {hero.title}
            </motion.h1>
            {hero.subtitle ? (
              <motion.p variants={fadeUp} className="text-lg font-semibold text-slate-600 md:text-xl">
                {hero.subtitle}
              </motion.p>
            ) : null}
            {hero.lead ? (
              <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {hero.lead}
              </motion.p>
            ) : null}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="rounded-3xl border border-sky-100 bg-white/80 p-6 shadow-xl backdrop-blur-sm"
          >
            <div className="space-y-4 text-sm text-slate-600">
              {overview.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="space-y-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-slate-900 md:text-3xl">
              Program Overview
            </motion.h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              {overview.map((paragraph) => (
                <motion.p key={paragraph} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            <motion.h3 variants={fadeUp} className="text-2xl font-semibold text-slate-900">
              Learning Outcomes
            </motion.h3>
            <motion.p variants={fadeUp} className="text-base font-medium text-slate-700">
              {outcomes.heading}
            </motion.p>
            <motion.ul variants={stagger} className="grid gap-3 text-base text-slate-700 md:grid-cols-2">
              {outcomes.items.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: BRAND_BLUE }} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </section>

      {tagline ? (
        <section className="py-16 md:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-sky-100 bg-white p-8 text-center shadow-md"
            >
              <p className="text-lg font-semibold leading-relaxed text-slate-700 md:text-xl">
                {tagline}
              </p>
            </motion.div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-2xl font-semibold text-slate-900"
          >
            Career Opportunities
          </motion.h3>
          <div className="hidden md:block">
            <div className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white/80 p-4">
              <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
                {marqueeItems.map((career, index) => (
                  <div
                    key={`${career}-${index}`}
                    className="min-w-[220px] rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {careers.map((career) => (
                <div
                  key={career}
                  className="min-w-[240px] snap-center rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-2xl font-semibold text-slate-900"
          >
            Campus Availability
          </motion.h3>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 text-base text-slate-700 md:grid-cols-2"
          >
            {campuses.map((campus) => (
              <motion.li key={campus} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                  •
                </span>
                <span>{campus}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: BRAND_LIGHT }}>
        <Container className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Start your credit evaluation</h3>
            <p className="text-base text-slate-600">
              Let our admissions team review your background so you can fast-track your enrollment and map the right pathway.
            </p>
          </motion.div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0097FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0588e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Credit Evaluation
              <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-2xl font-semibold text-slate-900"
            >
              Who Can Apply
            </motion.h3>
            <ul className="space-y-3 text-base text-slate-700">
              {WHO_CAN_APPLY.map((item) => (
                <li key={item.text} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: BRAND_BLUE }} />
                    <span>{item.text}</span>
                  </div>
                  {item.children ? (
                    <ul className="ml-6 space-y-2 text-sm text-slate-600">
                      {item.children.map((child) => (
                        <li key={child} className="flex items-start gap-2">
                          <span>•</span>
                          <span>{child}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-2xl font-semibold text-slate-900"
            >
              Enrollment Requirements
            </motion.h3>
            <div className="space-y-3">
              {ENROLLMENT_REQUIREMENTS.map((section) => (
                <AccordionItem key={section.title} section={section} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-sky-600 shadow-sm">
              {badge}
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}

function AccordionItem({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-slate-900"
        aria-expanded={open}
      >
        {section.title}
        <ChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden px-6 pb-6 text-sm text-slate-600">
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
