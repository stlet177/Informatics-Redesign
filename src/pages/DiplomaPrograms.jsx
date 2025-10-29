import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Diploma Programs",
    subtitle: "Three-year professional diplomas designed for immediate industry deployment.",
    lead: "Pursue a comprehensive diploma in Information Technology, Computer Science, or Information Systems with capstone projects and immersive industry exposure that translate directly to workplace readiness.",
  },
  overview: [
    "The Informatics Diploma Programs extend over three academic years and provide a deeper mastery of computing foundations, business processes, and collaborative project work.",
    "Students progress through core technical subjects—programming, systems analysis, networking, data management, and emerging technologies—while strengthening communication and critical thinking skills.",
    "Industry partners co-create live project briefs, letting you experience agile teamwork, solution prototyping, and stakeholder presentations before graduation.",
    "Graduates earn diploma credentials that employers value, and retain the option to bridge seamlessly into a bachelor’s program with maximum credit recognition.",
  ],
  outcomes: {
    heading: "As an Informatics Diploma student, you will learn to:",
    items: [
      "Architect and implement full-stack solutions aligned with business requirements.",
      "Model data, design databases, and apply analytics to drive informed decisions.",
      "Administer and secure enterprise networks and cloud environments.",
      "Lead collaborative software development projects using agile methodologies.",
      "Translate industry problems into capstone deliverables with measurable impact.",
    ],
  },
  tagline:
    "Diploma Programs — A three-year pathway that blends advanced technical instruction, business integration, and project-based learning so you graduate ready for professional roles or continuation to a computing degree.",
  careers: [
    "Systems Analyst",
    "Application Support Engineer",
    "Database Specialist",
    "Full-Stack Developer",
    "IT Project Associate",
    "Technical Business Analyst",
    "Cybersecurity Analyst",
    "DevOps Technician",
    "Innovation Lab Associate",
    "Data Operations Specialist",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang", "Informatics Imus, Cavite"],
  badge: "Diploma",
};

export default function DiplomaPrograms() {
  return <ProgramPageLayout program={program} />;
}

