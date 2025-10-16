import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Technical Drafting",
    lead: "Explore the Technical Drafting track designed to prepare learners for careers in technical design and drafting.",
  },
  overview: [
    "The Technical Drafting track focuses on technical drawing and design, preparing students for careers in engineering and architecture.",
    "This specialized track teaches students to create detailed technical drawings, blueprints, and designs using computer-aided design (CAD) software and traditional drafting techniques.",
    "Students will learn about architectural drafting, mechanical drafting, civil engineering drawings, and 3D modeling to support various engineering and construction projects.",
  ],
  outcomes: {
    heading: "As a Technical Drafting student, you will learn to:",
    items: [
      "Create accurate technical drawings and blueprints",
      "Use CAD software for design and drafting",
      "Understand engineering and architectural standards",
      "Apply geometric and mathematical principles to design",
      "Prepare for careers in engineering and construction support",
    ],
  },
  tagline:
    "Technical Drafting — Specialized track that develops precision drafting skills and technical knowledge essential for engineering, architecture, and manufacturing industries.",
  careers: [
    "Technical Drafter",
    "CAD Technician",
    "Architectural Drafter",
    "Mechanical Drafter",
    "Civil Engineering Technician",
    "Design Assistant",
    "Blueprint Reader",
    "Construction Document Specialist",
    "3D Modeler",
    "Engineering Assistant",
    "Survey Technician",
    "Quality Control Inspector",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Technical Drafting",
};

export default function SHSTechnicalDrafting() {
  return <ProgramPageLayout program={program} />;
}
