import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Bachelor of Science in Information Technology",
    lead: "Turn your passion for technology into a career.",
  },
  overview: [
    "Turn your passion for technology into a career.",
    "The BSIT program is a three-year course that builds strong foundations in programming, web, database, and networking—while training you to design, manage, and secure IT infrastructures.",
    "With hands-on learning in both software and hardware, you’ll gain the skills to solve real-world tech challenges, protect systems, and support organizations in a digital-first world.",
    "Graduates are equipped to thrive in roles from technical support and systems administration to leadership positions in the fast-growing IT industry.",
  ],
  outcomes: {
    heading: "As an Informatics BS Information Technology student, you will learn to:",
    items: [
      "Use hardware and software technologies effectively.",
      "Design and manage IT systems for reliable operations.",
      "Create computing solutions that meet organizational needs.",
      "Support users by applying and managing the right technologies.",
    ],
  },
  tagline:
    "Bachelor of Science in Information Technology — A three-year program that integrates IT and business processes—developing skills in systems analysis, database management, e-commerce, and digital transformation. Students gain both technical and managerial expertise to help organizations thrive in a data-driven world.",
  careers: [
    "Applications Developer",
    "System Analyst",
    "Database Administrator",
    "Technical Support Specialist",
    "Entrepreneur in IT Industry",
    "Test Engineer",
    "Information Security Administrator",
    "Web Administrator / Web Master",
    "Network Administrator",
    "Web Developer",
    "Network Engineer",
    "Web Designer",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "BSIT",
};

export default function BSIT() {
  return <ProgramPageLayout program={program} />;
}
