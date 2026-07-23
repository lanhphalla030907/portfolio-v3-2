// types/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Card image (thumbnail)
  modalImage?: string; // Optional larger image for modal
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Job Portal Platform",
    description:
      "A modern full-stack recruitment platform that connects employers with job seekers through an intuitive dashboard and streamlined application workflow.",
    image: "/project/jobportal.png",
    tags: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Google OAuth",
      "Bakong KHQR",
    ],
    modalImage: "/project/jobportal2.png", // Larger version for modal
    featured: true,
    liveUrl: "#",
    sourceUrl: "#",
    features: [
      "Google OAuth login",
      "Bakong KHQR payment integration",
      "Role-based authentication",
      "Job posting & management",
      "Job search & filtering",
      "Application management",
      "Employer dashboard",
      "Admin analytics dashboard",
      "Responsive design",
    ],
  },
  {
    id: "2",
    title: "POS Pharmacy",
    description:
      "A full-stack pharmacy management system built with Laravel and MySQL to manage medicines, inventory, suppliers, sales transactions, and business operations through an intuitive dashboard.",
    image: "/project/pos.png",
    modalImage: "/project/pos2.png",
    tags: ["React", "Laravel", "MySQL", "Tailwind"],
    liveUrl: "#",
    sourceUrl: "#",
    features: [
      "Medicine inventory management",
      "POS sales system",
      "Supplier management",
      "Category management",
      "Authentication and authorization",
      "Sales reports",
      "Dashboard analytics",
    ],
  },
  {
    id: "3",
    title: "Portfolio Builder",
    description: "Drag-and-drop toolkit for creatives to showcase their work",
    image: "/placeholder-portfolio.jpg",
    modalImage: "/placeholder-portfolio-full.jpg",
    tags: ["Next.js", "Tailwind", "Framer"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description:
      "Interactive maps with live forecast data and D3 visualizations",
    image: "/placeholder-weather.jpg",
    modalImage: "/placeholder-weather-full.jpg",
    tags: ["Vue", "D3", "Express"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];
