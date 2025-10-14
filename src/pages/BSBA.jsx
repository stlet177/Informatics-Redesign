import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Bachelor of Science in Business Administration",
    subtitle: "Major in Marketing Management",
    lead: "The BSBA in Marketing Management is a three-year program that prepares students to become strategic and creative leaders in a fast-changing business world.",
  },
  overview: [
    "The BSBA in Marketing Management is a three-year program that prepares students to become strategic and creative leaders in a fast-changing business world.",
    "It combines theory and hands-on learning in market research, product development, pricing, and customer engagement, training students to make smart, data-driven decisions.",
    "Graduates are ready for careers in marketing, business, or entrepreneurship, equipped to lead teams, grow brands, and drive business success.",
  ],
  outcomes: {
    heading: "As an Informatics BSBA Marketing Management student, you will learn to:",
    items: [
      "Master key management functions like planning, organizing, and leading.",
      "Anticipate market changes and set effective business strategies.",
      "Develop marketing plans that drive growth and innovation.",
      "Turn new ideas and trends into viable business opportunities.",
      "Manage business units for long-term success.",
      "Use research to make informed business and marketing decisions.",
    ],
  },
  tagline:
    "Bachelor of Science in Business Administration Major in Marketing Management — A three-year program that blends theory and real-world practice in research, product development, pricing, customer relations, and digital strategies—preparing you to compete in today’s fast-changing global marketplace.",
  careers: [
    "Entrepreneur",
    "Marketing, Market Research, Advertising and Public Relations Professionals",
    "Marketing Communication Designer",
    "Data Analyst",
    "Digital Marketing Specialist",
    "Brand Developer",
    "Product Developer",
    "Account Executive",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "BSBA",
};

export default function BSBA() {
  return <ProgramPageLayout program={program} />;
}
