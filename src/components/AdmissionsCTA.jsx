import { motion } from "framer-motion";
import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { fadeInUp } from "../lib/variants";
import { ChevronRight } from "lucide-react";
import { admissionsConfig } from "../lib/content.config";
import { navigateHash } from "../lib/navigation";

export default function AdmissionsCTA() {
  const goTo = (hash) => () => navigateHash(hash);

  return (
    <section id="admissions" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>Admissions & Scholarships</h2>
          <p className="mt-4 text-slate-600">
            We welcome curious, motivated learners. Submit your online application, upload requirements,
            and explore scholarship opportunities for academic excellence and financial need.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>100% online application & document uploads</li>
            <li>Entrance assessment with outcomes-based advising</li>
            <li>Scholarships and partner-funded grants</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={goTo("#/contact")}
              className="simple-btn simple-btn--primary"
            >
              Begin application <ChevronRight size={18} />
            </button>
            <a
              href={admissionsConfig.imcRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="simple-btn simple-btn--outline"
            >
              IMC application <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeInUp}>
          <div className="rounded-3xl p-6 shadow-lg ring-1 ring-black/5 bg-white">
            <div className="flex items-center gap-2 text-sm font-medium" style={{color: BRAND_DARK}}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Enrollment is ongoing
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 text-sm">
              <div className="rounded-xl p-4 text-center" style={{ background: "#EEF4FF" }}>
                <div className="text-base font-semibold" style={{ color: BRAND_BLUE }}>Apply today to secure your slot for SY 2025-2026.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
