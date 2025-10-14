import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Arts, Social Sciences, and Humanities (HUMSS)",
    lead: "Explore the HUMSS strand designed to prepare learners for college and careers in humanities and social sciences.",
  },
  overview: [
    "The Humanities and Social Sciences (HUMSS) strand emphasizes communication, society, and culture, guiding students toward careers in education, law, journalism, and the social sciences.",
    "This strand develops critical thinking, research skills, and a deep understanding of human behavior and societal issues.",
    "Students will engage in subjects like philosophy, literature, history, and social studies to prepare for higher education in liberal arts and social sciences.",
  ],
  outcomes: {
    heading: "As a HUMSS student, you will learn to:",
    items: [
      "Analyze and interpret complex texts and ideas",
      "Understand social, cultural, and political systems",
      "Develop strong communication and research skills",
      "Apply critical thinking to real-world problems",
      "Prepare for careers in education, law, and social services",
    ],
  },
  tagline:
    "HUMSS — Humanities and Social Sciences strand that nurtures well-rounded individuals ready to contribute to society through understanding human culture, behavior, and institutions.",
  careers: [
    "Teacher/Educator",
    "Journalist",
    "Lawyer",
    "Social Worker",
    "Researcher",
    "Writer/Author",
    "Politician",
    "Psychologist",
    "Historian",
    "Librarian",
    "Communications Specialist",
    "NGO Worker",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "HUMSS",
};

export default function SHSHUMSS() {
  return <ProgramPageLayout program={program} />;
}
