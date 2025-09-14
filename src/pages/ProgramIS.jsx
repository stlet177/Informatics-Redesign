import { motion } from "framer-motion";
import Container from "../components/Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { asset } from "../lib/assets";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const slideUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } } };

export default function ProgramIS() {
  const lottie = asset("assets/ProgramInformation.lottie");
  return (
    <div className="bg-white">
      <section className="pt-24 md:pt-28 pb-10 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-36 h-[420px] w-[420px] opacity-10 -z-10" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #0A84FF 100%)`, clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)" }} />
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={slideUp} className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}>Bachelor’s Degree</motion.div>
            <motion.h1 variants={slideUp} className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>BS Information Systems</motion.h1>
            <motion.p variants={slideUp} className="mt-3 text-slate-700">Bridge business and technology through data-driven systems. Learn to analyze processes, design solutions, and enable better decisions across organizations.</motion.p>
            <motion.div variants={slideUp} className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full px-3 py-1 bg-slate-100" style={{ color: BRAND_DARK }}>4 years</span>
              <span className="rounded-full px-3 py-1 bg-slate-100" style={{ color: BRAND_DARK }}>Tracks: BAIS, Analytics, ERP</span>
              <span className="rounded-full px-3 py-1 bg-slate-100" style={{ color: BRAND_DARK }}>Industry-aligned</span>
            </motion.div>
            <motion.div variants={slideUp} className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white shadow-sm" style={{ background: BRAND_BLUE }}>Apply now</a>
              <a href="#programs" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border" style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}>Back to Programs</a>
            </motion.div>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" animate="show" className="relative">
            <div className="w-full h-[280px] md:h-[320px] rounded-3xl bg-transparent">
              <DotLottieReact
                src={lottie}
                loop
                autoplay
                className="mix-blend-multiply"
                style={{ width: '100%', height: '100%', mixBlendMode: 'multiply', background: 'transparent' }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={slideUp} className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Program Overview</motion.h2>
            <motion.p variants={slideUp} className="mt-3 text-slate-700 max-w-3xl">The BS Information Systems program combines systems analysis, business processes, and data management. Students learn how to design and implement solutions that improve efficiency and deliver insights across departments.</motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-xl md:text-2xl font-semibold" style={{ color: BRAND_DARK }}>Focus Areas</motion.h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Business Process Mapping', desc: 'Document and optimize processes with BPM tools and methods.' },
              { title: 'Data & Analytics', desc: 'Model data, build dashboards, and inform decisions.' },
              { title: 'Enterprise Systems', desc: 'ERP, CRM, and integration patterns across the org.' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <div className="text-lg font-semibold" style={{ color: BRAND_DARK }}>{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-xl md:text-2xl font-semibold" style={{ color: BRAND_DARK }}>What you’ll learn</motion.h3>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 grid gap-2 text-sm text-slate-700">
            {[
              'Systems analysis & design',
              'Relational databases and SQL',
              'Data visualization and storytelling',
              'Project management and requirements engineering',
              'Enterprise systems and integrations',
              'IT governance and information security basics',
            ].map((x, i) => (
              <motion.li key={i} variants={slideUp} className="inline-flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ background: BRAND_BLUE }} />
                <span>{x}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-xl md:text-2xl font-semibold" style={{ color: BRAND_DARK }}>Career paths</motion.h3>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              'Business Analyst / Systems Analyst',
              'Data Analyst / BI Analyst',
              'ERP Specialist / Functional Consultant',
              'IT Project Coordinator',
            ].map((x, i) => (
              <motion.div key={i} variants={slideUp} className="rounded-xl bg-white p-4 ring-1 ring-black/5">{x}</motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <div className="text-xl font-semibold" style={{ color: BRAND_DARK }}>Ready to get started?</div>
            <p className="mt-2 text-slate-600">Check admissions requirements, scholarships, and submit your application online.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white" style={{ background: BRAND_BLUE }}>Begin application</a>
            <a href="#admissions" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border" style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}>Admissions & Scholarships</a>
          </div>
        </Container>
      </section>
    </div>
  );
}
