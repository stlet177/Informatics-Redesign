import Container from "../components/Container";
import ProgramCard from "../components/ProgramCard";
import { BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { asset } from "../lib/assets";
import { BookOpen, BarChart3, GraduationCap, Compass } from "lucide-react";

export default function SHS() {
  const shsItems = [
    { icon: BookOpen, title: "ICT (Information and Communications Technology)", desc: "Focuses on computers, programming, and digital skills, preparing students for careers in IT and technology.", lottie: asset("assets/ICT.lottie") },
    { icon: BarChart3, title: "ABM (Accountancy, Business, and Management)", desc: "Centers on business, finance, and management, training students for entrepreneurship and corporate professions.", lottie: asset("assets/ABM.lottie") },
    { icon: GraduationCap, title: "HUMSS (Humanities and Social Sciences)", desc: "Emphasizes communication, society, and culture, guiding students toward careers in education, law, journalism, and the social sciences.", lottie: asset("assets/education.lottie") },
    { icon: Compass, title: "GAS (General Academic Strand)", desc: "Offers a flexible mix of subjects, giving undecided students broader options for college and future careers.", lottie: asset("assets/GAS2.lottie") },
  ];

  return (
    <main className="pt-24 md:pt-28">
      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>Senior High School Tracks</h1>
          <p className="mt-2 text-slate-700">Explore our SHS strands designed to prepare learners for college and careers.</p>
        </Container>
      </section>
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {shsItems.map((it, i) => (
              <ProgramCard
                key={i}
                icon={it.icon}
                title={it.title}
                desc={it.desc}
                lottie={it.lottie}
                descLines={4}
                descMin={'5.75rem'}
                delay={i * 0.06}
                href="#/contact"
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

