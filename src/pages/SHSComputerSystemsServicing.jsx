import ProgramPageLayout from "../components/programs/ProgramPageLayout";

const program = {
  hero: {
    title: "Computer Systems Servicing",
    lead: "Explore the Computer Systems Servicing track designed to prepare learners for careers in IT hardware and systems support.",
  },
  overview: [
    "The Computer Systems Servicing track focuses on computer hardware and maintenance, preparing students for careers in IT support and systems administration.",
    "This hands-on track teaches students computer assembly, hardware troubleshooting, network setup, and systems maintenance using industry-standard tools and practices.",
    "Students will gain practical experience with PC components, operating systems, networking equipment, and develop skills for IT support roles.",
  ],
  outcomes: {
    heading: "As a Computer Systems Servicing student, you will learn to:",
    items: [
      "Assemble and maintain computer hardware systems",
      "Troubleshoot and repair computer components",
      "Install and configure operating systems and software",
      "Set up and maintain computer networks",
      "Provide technical support and customer service",
    ],
  },
  tagline:
    "Computer Systems Servicing — Hands-on track that develops technical skills in computer hardware, maintenance, and IT support services.",
  careers: [
    "IT Support Specialist",
    "Computer Technician",
    "Systems Administrator",
    "Network Technician",
    "Hardware Engineer",
    "Technical Support Engineer",
    "Field Service Technician",
    "Computer Repair Specialist",
    "Data Center Technician",
    "IT Help Desk Specialist",
    "Systems Analyst",
    "Network Administrator",
  ],
  campuses: ["Informatics Manila", "Informatics Northgate, Alabang"],
  badge: "Computer Systems Servicing",
};

export default function SHSComputerSystemsServicing() {
  return <ProgramPageLayout program={program} />;
}
