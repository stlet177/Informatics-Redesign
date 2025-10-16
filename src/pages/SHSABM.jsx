import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Accountancy, Business, and Management (ABM)",
    lead: "Explore the ABM strand designed to prepare learners for college and careers in business and management.",
  },
  overview: [
    "The Accountancy, Business, and Management (ABM) strand centers on business, finance, and management, training students for entrepreneurship and corporate professions.",
    "This strand provides foundational knowledge in accounting, business administration, and entrepreneurial skills to prepare students for higher education in business-related fields.",
    "Students will learn about financial management, marketing, operations, and business ethics through practical and theoretical coursework.",
  ],
  outcomes: {
    heading: "As an ABM student, you will learn to:",
    items: [
      "Understand fundamental business and accounting principles",
      "Develop entrepreneurial and management skills",
      "Analyze financial statements and business data",
      "Apply marketing and operations strategies",
      "Prepare for careers in business, finance, and entrepreneurship",
    ],
  },
  tagline:
    "ABM — Accountancy, Business, and Management strand that equips students with essential business knowledge and skills for success in the corporate world and entrepreneurship.",
  careers: [
    "Accountant",
    "Business Analyst",
    "Entrepreneur",
    "Financial Advisor",
    "Marketing Specialist",
    "Operations Manager",
    "Bank Officer",
    "Management Consultant",
    "Auditor",
    "Business Development Manager",
    "HR Specialist",
    "Sales Manager",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "ABM",
};

export default function SHSABM() {
  return <ProgramPageLayout program={program} />;
}
