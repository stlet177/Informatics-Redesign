import { motion } from "framer-motion";
import Container from "./Container";
import ProgramCard from "./ProgramCard";
import { BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { fadeInUp } from "../lib/variants";
import { BookOpen, Code2, Database, BarChart3, Compass } from "lucide-react";

export default function Programs() {
  const degreeItems = [
    { icon: BookOpen, title: "BS Information Technology", desc: "Core CS/IT fundamentals, software engineering, cloud, and security tracks with modern toolchains.", href: "#/programs/information-technology" },
    { icon: Code2, title: "BS Computer Science", desc: "Computational theory, algorithms, AI/ML foundations, and high-performance software design.", href: "#/programs/computer-science" },
    { icon: Database, title: "BS Information Systems", desc: "Business process analysis, data systems, and tech-enabled decision support in organizations.", href: "#/programs/information-systems" },
    { icon: BarChart3, title: "BS Business Administration (Business Analytics)", desc: "Management + data literacy: spreadsheets to dashboards to real-world decision systems.", href: "#/programs/business-administration" },
  ];

  const shsItems = [
    { icon: BookOpen, title: "ICT (Information and Communications Technology)", desc: "Focuses on computers, programming, and digital skills, preparing students for careers in IT and technology.", lottie: asset("assets/ICT.lottie") },
    { icon: BarChart3, title: "ABM (Accountancy, Business, and Management)", desc: "Centers on business, finance, and management, training students for entrepreneurship and corporate professions.", lottie: asset("assets/ABM.lottie") },
    { icon: BookOpen, title: "HUMSS (Humanities and Social Sciences)", desc: "Emphasizes communication, society, and culture, guiding students toward careers in education, law, journalism, and the social sciences.", lottie: asset("assets/education.lottie") },
    { icon: Compass, title: "GAS (General Academic Strand)", desc: "Offers a flexible mix of subjects, giving undecided students broader options for college and future careers.", lottie: asset("assets/GAS2.lottie"), video: asset("assets/Exams.webm") },
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

        {/* Bachelor's Degree Programs */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: '#F2F8FF', color: BRAND_BLUE }}>
            Bachelor's Degree Programs
          </div>
          {degreeItems.map((it, i) => {
            const imgMap = {
              "BS Information Technology": asset("assets/informationtechnology.jpg"),
              "BS Computer Science": asset("assets/computerscience.jpg"),
              "BS Information Systems": asset("assets/Informationsystem.jpg"),
              "BS Business Administration (Business Analytics)": asset("assets/BSBA.jpg"),
            };
            return (
              <ProgramCard key={i} icon={it.icon} title={it.title} desc={it.desc} img={imgMap[it.title]} delay={i * 0.06} href={it.href}
              />
            );
          })}
        </div>

        {/* Senior High School Tracks */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: '#F2F8FF', color: BRAND_BLUE }}>
            Senior High School Tracks
          </div>
          {shsItems.map((it, i) => (
            <ProgramCard key={i} icon={it.icon} title={it.title} desc={it.desc} tag={it.tag} lottie={it.lottie} video={it.video} descLines={4} descMin={'5.75rem'} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
