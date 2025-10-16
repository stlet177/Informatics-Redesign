import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Contact Center Services",
    lead: "Explore the Contact Center Services track designed to prepare learners for careers in customer service and communication.",
  },
  overview: [
    "The Contact Center Services track focuses on customer service and communication skills, preparing students for careers in call centers and customer support.",
    "This service-oriented track develops communication skills, customer service techniques, and business etiquette for contact center environments.",
    "Students will learn telephone etiquette, conflict resolution, CRM systems, and develop the interpersonal skills needed for customer-facing roles.",
  ],
  outcomes: {
    heading: "As a Contact Center Services student, you will learn to:",
    items: [
      "Communicate effectively in professional settings",
      "Provide excellent customer service and support",
      "Handle customer inquiries and complaints professionally",
      "Use contact center technology and CRM systems",
      "Develop interpersonal and conflict resolution skills",
    ],
  },
  tagline:
    "Contact Center Services — Service-oriented track that develops communication and customer service skills for contact center and customer support careers.",
  careers: [
    "Customer Service Representative",
    "Call Center Agent",
    "Technical Support Specialist",
    "Customer Care Associate",
    "Client Services Coordinator",
    "Help Desk Specialist",
    "Sales Support Representative",
    "Account Manager",
    "Customer Success Specialist",
    "Virtual Assistant",
    "Telemarketing Specialist",
    "Service Desk Analyst",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Contact Center Services",
};

export default function SHSContactCenterServices() {
  return <ProgramPageLayout program={program} />;
}
