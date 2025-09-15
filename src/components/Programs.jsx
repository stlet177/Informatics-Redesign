import { motion } from "framer-motion";
import Container from "./Container";
import ProgramCard from "./ProgramCard";
import { BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { fadeInUp } from "../lib/variants";
import { GraduationCap, BookOpen, Layers, Award } from "lucide-react";

export default function Programs() {
  const categories = [
    {
      icon: GraduationCap,
      title: "Higher Education",
      desc: "Bachelor’s degree programs aligned with industry: IT, CS, IS, and Business Analytics.",
      href: "#/programs#academic",
    },
    {
      icon: BookOpen,
      title: "Senior High School",
      desc: "ICT, ABM, HUMSS, and GAS tracks that build strong foundations for college and careers.",
      href: "#/programs/shs",
    },
    {
      icon: Layers,
      title: "Certificate Programs",
      desc: "TESDA and Diploma programs focused on practical, job-ready skills.",
      href: "#/programs#certificates",
    },
    {
      icon: Award,
      title: "Short Courses (IMC)",
      desc: "Upskill fast with flexible short programs. Explore the IMC catalog.",
      href: "https://imc.informatics.edu.ph/",
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* subtle geometric background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage:
          `radial-gradient(circle at 20% 20%, ${BRAND_BLUE}20 0, transparent 40%),` +
          `radial-gradient(circle at 80% 30%, ${BRAND_BLUE}14 0, transparent 45%),` +
          `radial-gradient(circle at 30% 80%, ${BRAND_BLUE}12 0, transparent 35%)`,
      }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }} />
      <Container className="relative z-10">
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold">Programs that align with industry</motion.h2>

        {/* Program categories (4 cards) */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((it, i) => (
            <ProgramCard
              key={i}
              icon={it.icon}
              title={it.title}
              desc={it.desc}
              href={it.href}
              descLines={4}
              descMin={'5.75rem'}
              delay={i * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
