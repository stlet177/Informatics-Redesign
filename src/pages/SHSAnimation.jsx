import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Animation",
    lead: "Explore the Animation track designed to prepare learners for careers in digital animation and visual storytelling.",
  },
  overview: [
    "The Animation track focuses on animation techniques and digital art, preparing students for careers in animation and visual effects.",
    "This creative track teaches students traditional and digital animation techniques, character design, storyboarding, and visual effects production.",
    "Students will work with industry-standard software to create 2D and 3D animations, develop visual storytelling skills, and build portfolios for animation careers.",
  ],
  outcomes: {
    heading: "As an Animation student, you will learn to:",
    items: [
      "Create 2D and 3D animations using professional software",
      "Develop character design and storyboarding skills",
      "Apply principles of animation and visual effects",
      "Build portfolios showcasing creative work",
      "Prepare for careers in animation, gaming, and visual effects",
    ],
  },
  tagline:
    "Animation — Creative track that develops artistic and technical skills for bringing stories to life through digital animation and visual effects.",
  careers: [
    "Animator",
    "Visual Effects Artist",
    "Character Designer",
    "Storyboard Artist",
    "Motion Graphics Designer",
    "Game Animator",
    "Video Editor",
    "Digital Artist",
    "Concept Artist",
    "Compositor",
    "Rigging Artist",
    "Animation Director",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Animation",
};

export default function SHSAnimation() {
  return <ProgramPageLayout program={program} />;
}
