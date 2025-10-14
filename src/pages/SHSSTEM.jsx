import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Science, Technology, Engineering, and Mathematics (STEM)",
    lead: "Explore the STEM strand designed to prepare learners for college and careers in science and technology.",
  },
  overview: [
    "The Science, Technology, Engineering, and Mathematics (STEM) strand focuses on science, technology, engineering, and math, preparing students for careers in STEM fields.",
    "This strand emphasizes critical thinking, problem-solving, and innovation through hands-on learning in laboratory work, research projects, and technological applications.",
    "Students will develop strong foundations in mathematics, physics, chemistry, biology, and computer science to pursue higher education in STEM disciplines.",
  ],
  outcomes: {
    heading: "As a STEM student, you will learn to:",
    items: [
      "Apply scientific methods and mathematical reasoning",
      "Design and conduct experiments and research",
      "Use technology tools for problem-solving",
      "Develop engineering design and prototyping skills",
      "Prepare for careers in science, technology, and engineering",
    ],
  },
  tagline:
    "STEM — Science, Technology, Engineering, and Mathematics strand that cultivates innovators and problem-solvers equipped for the challenges of the modern world.",
  careers: [
    "Engineer",
    "Scientist",
    "Researcher",
    "Data Analyst",
    "Software Developer",
    "Medical Professional",
    "Environmental Scientist",
    "Mathematician",
    "Technologist",
    "Inventor",
    "Quality Control Specialist",
    "Systems Analyst",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "STEM",
};

export default function SHSSTEM() {
  return <ProgramPageLayout program={program} />;
}
