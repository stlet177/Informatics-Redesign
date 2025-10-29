import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Associate Diploma Programs (ACT)",
    subtitle: "Two-year stackable pathways aligned with global tech certification tracks.",
    lead: "Earn an Associate in Computer Technology (ACT) credential focused on hands-on skills in application development, multimedia, and networking—built to help you land work quickly or bridge toward a full bachelor’s degree.",
  },
  overview: [
    "The Informatics Associate Diploma Programs (ACT) deliver a compact, two-year curriculum that emphasizes practical technical skills alongside essential workplace competencies.",
    "Each specialization—Application Development, Multimedia, and Networking—combines industry tools, real-world projects, and certification preparation so you build a portfolio that employers recognize.",
    "Because the curriculum mirrors the first two years of a computing degree, credits seamlessly articulate into Informatics bachelor’s programs, letting you continue toward a BS while receiving a work-ready credential along the way.",
    "Dedicated mentoring, career services, and flexible scheduling ensure that working learners and fresh graduates alike can accelerate their entry into the tech industry.",
  ],
  outcomes: {
    heading: "As an Informatics Associate Diploma student, you will learn to:",
    items: [
      "Design and deploy applications using modern programming frameworks and databases.",
      "Create multimedia assets and interactive experiences optimized for digital platforms.",
      "Set up, secure, and troubleshoot wired and wireless networks for small-to-medium businesses.",
      "Apply project management, documentation, and client communication practices in lab simulations.",
      "Pursue global certifications aligned with your chosen specialization to validate your skills.",
    ],
  },
  tagline:
    "Associate Diploma Programs (ACT) — Two-year, career-focused tracks that balance technical mastery with professional skills, stackable toward Informatics bachelor’s degrees or immediate employment across the digital workforce.",
  careers: [
    "Junior Application Developer",
    "Front-End Web Designer",
    "IT Support Specialist",
    "Junior Network Administrator",
    "Multimedia Artist",
    "Technical Documentation Associate",
    "Service Desk Analyst",
    "QA Tester",
    "Digital Content Producer",
    "Field Support Technician",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang", "Informatics Imus, Cavite"],
  badge: "ACT",
};

export default function AssociateDiplomaPrograms() {
  return <ProgramPageLayout program={program} />;
}

