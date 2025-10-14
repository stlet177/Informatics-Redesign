import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Bachelor of Science in Computer Science",
    lead: "The BS in Computer Science (BSCS) is a three-year program that builds strong foundations in computing, algorithms, and software development.",
  },
  overview: [
    "The BS in Computer Science (BSCS) is a three-year program that builds strong foundations in computing, algorithms, and software development.",
    "Students gain hands-on experience in designing real-world tech solutions while strengthening problem-solving and research skills.",
    "Graduates are prepared for careers in software development, systems analysis, research, or advanced studies in AI, data science, and cybersecurity—ready to thrive in both local and global tech industries.",
  ],
  outcomes: {
    heading: "As an Informatics BS Computer Science student, you will learn to:",
    items: [
      "Apply computing concepts, algorithms, and emerging technologies.",
      "Design and build complex software systems.",
      "Develop effective algorithms to solve problems.",
      "Follow standards and best practices in software engineering.",
      "Create, modify, and integrate software components and applications.",
    ],
  },
  careers: [
    "Software Engineers",
    "Systems Software Developers",
    "Research and Development Computing Professionals",
    "Applications Software Developers",
    "Computer Programmers",
    "Systems Analysts",
    "Data Analysts",
    "Quality Assurance Specialists",
    "Software Support Specialists",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "BSCS",
};

export default function BSCS() {
  return <ProgramPageLayout program={program} />;
}
