import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Visual Graphic Design",
    lead: "Explore the Visual Graphic Design track designed to prepare learners for careers in graphic design and visual media.",
  },
  overview: [
    "The Visual Graphic Design track focuses on graphic design principles and digital tools, preparing students for careers in visual communication and design.",
    "This design-focused track teaches students typography, layout design, branding, digital imaging, and user interface design using industry-standard software.",
    "Students will develop creative portfolios, learn design thinking processes, and gain skills in visual communication for print and digital media.",
  ],
  outcomes: {
    heading: "As a Visual Graphic Design student, you will learn to:",
    items: [
      "Apply principles of design, typography, and layout",
      "Use professional design software and tools",
      "Create branding and marketing materials",
      "Develop user interface and user experience designs",
      "Build portfolios showcasing design work",
    ],
  },
  tagline:
    "Visual Graphic Design — Design track that develops creative and technical skills for visual communication, branding, and digital media design.",
  careers: [
    "Graphic Designer",
    "UI/UX Designer",
    "Brand Designer",
    "Art Director",
    "Digital Designer",
    "Print Designer",
    "Web Designer",
    "Advertising Designer",
    "Packaging Designer",
    "Motion Graphics Designer",
    "Visual Communications Specialist",
    "Creative Director",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Visual Graphic Design",
};

export default function SHSVisualGraphicDesign() {
  return <ProgramPageLayout program={program} />;
}
