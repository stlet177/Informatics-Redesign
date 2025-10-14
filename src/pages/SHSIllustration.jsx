import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Illustration",
    lead: "Explore the Illustration track designed to prepare learners for careers in visual arts and illustration.",
  },
  overview: [
    "The Illustration track focuses on illustration techniques and visual communication, preparing students for careers in graphic design and illustration.",
    "This artistic track develops skills in traditional and digital illustration, visual storytelling, and graphic design principles.",
    "Students will learn various illustration techniques, color theory, composition, and digital tools to create compelling visual narratives and designs.",
  ],
  outcomes: {
    heading: "As an Illustration student, you will learn to:",
    items: [
      "Master traditional and digital illustration techniques",
      "Apply principles of design, color, and composition",
      "Create visual narratives and storytelling through art",
      "Use industry-standard illustration software",
      "Build portfolios for graphic design and illustration careers",
    ],
  },
  tagline:
    "Illustration — Artistic track that hones creative skills in visual communication, design, and illustration for various media and publishing industries.",
  careers: [
    "Illustrator",
    "Graphic Designer",
    "Concept Artist",
    "Storyboard Artist",
    "Book Illustrator",
    "Editorial Illustrator",
    "Digital Artist",
    "Art Director",
    "Comic Book Artist",
    "Character Designer",
    "Medical Illustrator",
    "Technical Illustrator",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Illustration",
};

export default function SHSIllustration() {
  return <ProgramPageLayout program={program} />;
}
