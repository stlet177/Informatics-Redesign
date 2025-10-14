import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Bachelor of Science in Information Systems",
    lead: "The BS in Information Systems (BSIS) is a three-year program that combines IT skills with business insight. It trains students to design and manage systems that connect technology with business operations.",
  },
  overview: [
    "The BS in Information Systems (BSIS) is a three-year program that combines IT skills with business insight. It trains students to design and manage systems that connect technology with business operations.",
    "Courses in programming, databases, and project management build both technical and leadership skills.",
    "Students learn to apply technology to real business challenges, preparing them for careers in IT management, systems design, and tech-driven organizations.",
  ],
  outcomes: {
    heading: "As an Informatics BS Information Systems student, you will learn to:",
    items: [
      "Use information technology to improve organizational performance.",
      "Design and implement systems that connect technology and business needs.",
      "Evaluate tech-driven processes that boost innovation and competitiveness.",
      "Bridge the gap between technical teams, management, and end-users.",
    ],
  },
  tagline:
    "Bachelor of Science in Information Systems — A three-year program that integrates IT and business processes—developing skills in systems analysis, database management, e-commerce, and digital transformation. Students gain both technical and managerial expertise to help organizations thrive in a data-driven world.",
  careers: [
    "Organizational Process Analysts",
    "Applications Developer",
    "Data Quality Analyst",
    "End User Trainer",
    "Solutions Specialist",
    "Documentation Specialist",
    "Systems Analyst / Auditor",
    "Quality Assurance Specialist",
    "IS Project Management Personnel",
    "Systems Implementation Officer",
    "Technical Support Specialist",
    "Entrepreneur in IT Industry",
  ],
  campuses: ["Informatics Manila"],
  badge: "BSIS",
};

export default function BSIS() {
  return <ProgramPageLayout program={program} />;
}
