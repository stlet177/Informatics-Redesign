import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Bachelor of Science in Office Administration",
    lead: "The Bachelor of Science in Office Administration (BSOA) with a specialization in Digital Productivity Tools is a three-year program that prepares students for modern, technology-driven workplaces.",
  },
  overview: [
    "The Bachelor of Science in Office Administration (BSOA) with a specialization in Digital Productivity Tools is a three-year program that prepares students for modern, technology-driven workplaces.",
    "It equips them with skills in office management, digital tools, communication, and leadership.",
    "Students learn how organizations work, how to improve processes, and how to design solutions that enhance efficiency and service delivery.",
    "Combining technical know-how with people skills, BSOA graduates are ready to become key contributors to organizational success.",
  ],
  outcomes: {
    heading: "As an Informatics BS Office Administration student, you will learn to:",
    items: [
      "Apply modern office procedures efficiently and accurately.",
      "Use current technologies to improve office systems.",
      "Build teamwork and management skills for collaborative work.",
      "Communicate professionally and maintain good workplace relations.",
      "Contribute effectively to daily operations and organizational success.",
    ],
  },
  tagline:
    "Bachelor of Science in Office Administration — A four-year program that prepares students to excel in today’s outcome-driven workplaces through advanced productivity tools, teamwork, communication, and problem-solving—developing versatile professionals ready to keep organizations efficient and future-ready.",
  careers: [
    "Entrepreneurs",
    "Administration Officers",
    "Office Supervisors/Managers",
    "Executive Secretaries",
    "Administrative/Department Coordinators",
    "Legal/Medical Secretaries",
    "Court Stenographers",
    "Bookkeepers",
    "Call Center Agents",
    "Customer Service Representatives",
  ],
  campuses: ["Informatics Imus, Cavite"],
  badge: "BSOA",
};

export default function BSOA() {
  return <ProgramPageLayout program={program} />;
}
