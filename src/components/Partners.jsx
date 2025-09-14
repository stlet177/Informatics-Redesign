import { motion } from "framer-motion";
import Container from "./Container";
import { fadeInUp } from "../lib/variants";
import { PARTNERS, PLACEHOLDER_IMG } from "../lib/assets";

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24">
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold">Industry partnerships</motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {PARTNERS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-xl bg-white p-5 ring-1 ring-black/5"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-12 md:max-h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER_IMG;
                }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

