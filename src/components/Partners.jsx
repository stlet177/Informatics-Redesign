import { motion } from "framer-motion";
import Container from "./Container";
import { fadeInUp } from "../lib/variants";
import { PARTNERS, PLACEHOLDER_IMG } from "../lib/assets";
import { BRAND_BLUE } from "../lib/brand";

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -z-10" style={{
        left: '-80px', top: '10%', width: '300px', height: '300px', opacity: 0.12,
        background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #0A84FF 100%)`,
        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
      }} />
      <div aria-hidden className="pointer-events-none absolute -z-10" style={{
        right: '-90px', bottom: '8%', width: '260px', height: '260px', opacity: 0.12,
        background: `linear-gradient(135deg, #0A84FF 0%, ${BRAND_BLUE} 100%)`,
        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
        transform: 'rotate(15deg)'
      }} />
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold"></motion.h2>
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
              className="flex items-center justify-center rounded-xl p-5 ring-1 ring-black/5"
              style={{
                background: `linear-gradient(135deg, ${BRAND_BLUE}10 0%, #FFFFFF 100%)`,
              }}
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
