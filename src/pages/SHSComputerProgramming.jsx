import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Computer Programming (Java)",
    lead: "Explore the Computer Programming track designed to prepare learners for careers in software development and programming.",
  },
  overview: [
    "The Computer Programming track focuses on programming fundamentals using Java, preparing students for careers in software development and IT.",
    "This technical track introduces students to programming concepts, algorithms, data structures, and software development methodologies using Java as the primary language.",
    "Students will learn object-oriented programming, problem-solving techniques, and develop practical projects to build programming proficiency.",
  ],
  outcomes: {
    heading: "As a Computer Programming student, you will learn to:",
    items: [
      "Write, debug, and maintain Java programs",
      "Apply object-oriented programming principles",
      "Solve problems using algorithms and data structures",
      "Develop software applications and projects",
      "Prepare for careers in software development and IT",
    ],
  },
  tagline:
    "Computer Programming — Technical track that builds foundational programming skills using Java, preparing students for software development careers.",
  careers: [
    "Software Developer",
    "Java Developer",
    "Application Developer",
    "Systems Analyst",
    "Programmer",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Database Developer",
    "IT Support Specialist",
    "Quality Assurance Tester",
    "Technical Consultant",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Computer Programming",
};

export default function SHSComputerProgramming() {
  return <ProgramPageLayout program={program} />;
}
