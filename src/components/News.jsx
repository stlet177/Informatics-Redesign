import { motion } from "framer-motion";
import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { fadeInUp } from "../lib/variants";
import { ChevronRight } from "lucide-react";

export default function News() {
  const items = [
    { title: "Informatics launches cloud innovation lab", date: "Aug 20, 2025", blurb: "Students gain hands-on exposure to multi-cloud architectures and DevOps pipelines." },
    { title: "Business Analytics capstone showcase", date: "Aug 8, 2025", blurb: "Teams present data-driven solutions to real SME problems, mentored by industry partners." },
    { title: "CompTIA-aligned cybersecurity bootcamp", date: "Jul 30, 2025", blurb: "Short-course pathway prepares learners for Security+ and SOC analyst roles." },
  ];

  return (
    <section id="news" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>News & Events</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((n, i) => (
            <motion.article
              key={i}
              className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">{n.date}</div>
              <h3 className="mt-2 text-lg font-semibold" style={{color: BRAND_DARK}}>{n.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{n.blurb}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: BRAND_BLUE }}>
                Read more <ChevronRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

