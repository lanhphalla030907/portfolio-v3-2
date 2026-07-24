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
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS"],
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
  id: "5",
  title: "Rental Website",
  description:
    "A simple rental management website that allows users to browse, manage, and organize rental listings. The application uses Local Storage for client-side data persistence and provides a responsive user experience with React and Tailwind CSS CSS.",
  image: "/project/home.png",
  modalImage: "/project/rental.png",
  tags: ["React", "Local Storage", "Tailwind CSS"],
  liveUrl: "https://rental-lp.vercel.app/",
  sourceUrl: "https://github.com/Ahlasakdailuktnam/rental",
  features: [
    "User authentication system",
    "Store and manage rental data using Local Storage",
    "Create and manage rental listings",
    "View detailed rental information",
    "Search and filter rental items",
    "Responsive design for mobile and desktop",
  
  ],
},
  {
    id: "4",
    title: "Portfolio Version 2",
    description: 
    "Just a bigginer react learner make a personal portfolio website built with React and Tailwind CSS to practice frontend design, responsive design but not good enougth, and creating simple user interfaces.",
    image: "/project/portv2.png",
    modalImage: "/project/portv2.png",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "portfolio-2-kappa-six.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/portfolio-2",
  },
  {
    id: "3",
    title: "Western Website",
    description: "Just design the simple website use HTML and CSS with responsive",
    image: "/project/western.png",
    modalImage: "/project/western.png",
    tags: ["Html", "CSS"],
    liveUrl: "https://western-lp.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/western",
  },
  {
    id: "6",
    title: "Moive Web",
    description:
      "Just design the simple website use Bootstrap with responsive",
    image: "/project/movie.png",
    modalImage: "/project/movie2.png",
    tags: ["HTMl", "CSS", "Bootstrap"],
    liveUrl: "https://movie-lp-omega.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/movie",
  },
 
];
