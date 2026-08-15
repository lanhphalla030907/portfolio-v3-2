// types/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Card image (thumbnail)
  images?: string[]; // Multiple images for detail page
  modalImage?: string; // Optional larger image for modal
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  features?: string[];
  // New fields
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
  team?: string;
  duration?: string;
  role?: string;
  client?: string;
  year?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Job Portal Platform",
    description:
      "A modern full-stack recruitment platform that connects employers with job seekers through an intuitive dashboard and streamlined application workflow.",
    longDescription:
      "The Job Portal Platform is a comprehensive recruitment solution designed to bridge the gap between employers and job seekers. It features a modern, intuitive interface with role-based dashboards, real-time application tracking, and seamless payment integration.",
    image: "/project/jobportal.png",
    modalImage: "/project/jobportal2.png",
    images: [
      "/project/jobportal.png",
      "/project/jobportal2.png",
      "/project/jobportal3.png",
      "/project/jobportal4.png",
    ],
    gallery: [
      "/project/jobportal.png",
      "/project/jobportal2.png",
      "/project/jobportal3.png",
      "/project/jobportal4.png",
    ],
    tags: [
      "React",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Google OAuth",
      "Bakong KHQR",
    ],
    technologies: [
      "React 18",
      "Laravel 10",
      "MySQL 8",
      "Tailwind CSS",
      "Google OAuth 2.0",
      "Bakong KHQR API",
      "RESTful API",
      "JWT Authentication",
    ],
    featured: true,
    liveUrl: "#",
    sourceUrl: "#",
    role: "Full Stack Developer",
    duration: "3 months",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
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
    challenges: [
      "Integrating Bakong KHQR payment system with Laravel",
      "Implementing real-time job application notifications",
      "Building a robust role-based access control system",
      "Optimizing database queries for job search performance",
    ],
    solutions: [
      "Used Laravel's payment gateway integration pattern for Bakong KHQR",
      "Implemented WebSocket for real-time notifications",
      "Built a comprehensive middleware system for role-based access",
      "Created optimized indexes and used Eloquent's eager loading",
    ],
  },
  {
    id: "2",
    title: "POS Pharmacy",
    description:
      "A full-stack pharmacy management system built with Laravel and MySQL to manage medicines, inventory, suppliers, sales transactions, and business operations through an intuitive dashboard.",
    longDescription:
      "The POS Pharmacy system is a complete business management solution for pharmacies. It handles everything from inventory management to sales transactions, supplier management, and detailed analytics, making pharmacy operations efficient and organized.",
    image: "/project/pos.png",
    modalImage: "/project/pos2.png",
    images: [
      "/project/pos.png",
      "/project/pos2.png",
      "/project/pos3.png",
    ],
    gallery: [
      "/project/pos.png",
      "/project/pos2.png",
      "/project/pos3.png",
    ],
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    technologies: [
      "React 18",
      "Laravel 10",
      "MySQL 8",
      "Tailwind CSS",
      "Chart.js",
      "RESTful API",
      "JWT Authentication",
    ],
    liveUrl: "#",
    sourceUrl: "#",
    role: "Full Stack Developer",
    duration: "2 months",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
    features: [
      "Medicine inventory management",
      "POS sales system",
      "Supplier management",
      "Category management",
      "Authentication and authorization",
      "Sales reports",
      "Dashboard analytics",
    ],
    challenges: [
      "Designing a scalable inventory management system",
      "Implementing real-time stock updates",
      "Generating accurate sales reports",
    ],
    solutions: [
      "Used database transactions for inventory consistency",
      "Implemented real-time stock tracking with events",
      "Built custom report generation with Laravel",
    ],
  },
  {
    id: "5",
    title: "Rental Website",
    description:
      "A simple rental management website that allows users to browse, manage, and organize rental listings. The application uses Local Storage for client-side data persistence and provides a responsive user experience with React and Tailwind CSS.",
    longDescription:
      "This rental management application demonstrates the power of client-side data persistence using Local Storage. Users can create, view, search, and manage rental listings with a clean, responsive interface built with React and Tailwind CSS.",
    image: "/project/home.png",
    modalImage: "/project/rental.png",
    images: [
      "/project/home.png",
      "/project/rental.png",
      "/project/rental2.png",
    ],
    gallery: [
      "/project/home.png",
      "/project/rental.png",
      "/project/rental2.png",
    ],
    tags: ["React", "Local Storage", "Tailwind CSS"],
    technologies: [
      "React 18",
      "Tailwind CSS",
      "Local Storage API",
      "React Hooks",
      "React Router",
      "Vercel",
    ],
    liveUrl: "https://rental-lp.vercel.app/",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/rental",
    role: "Frontend Developer",
    duration: "2 weeks",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
    features: [
      "User authentication system",
      "Store and manage rental data using Local Storage",
      "Create and manage rental listings",
      "View detailed rental information",
      "Search and filter rental items",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      "Managing complex state with Local Storage",
      "Implementing search and filter functionality",
      "Handling form validation and data persistence",
    ],
    solutions: [
      "Used custom hooks for Local Storage management",
      "Implemented efficient search algorithms",
      "Built comprehensive form validation system",
    ],
  },
  {
    id: "4",
    title: "Portfolio Version 2",
    description: 
      "Just a beginner React learner making a personal portfolio website built with React and Tailwind CSS to practice frontend design, responsive design, and creating simple user interfaces.",
    longDescription:
      "This portfolio website was my early exploration into React development. It showcases my journey as a developer and serves as a practice ground for modern frontend technologies and responsive design principles.",
    image: "/project/portv2.png",
    modalImage: "/project/portv2.png",
    images: [
      "/project/portv2.png",
    ],
    gallery: [
      "/project/portv2.png",
    ],
    tags: ["React", "Tailwind CSS"],
    technologies: [
      "React 18",
      "Tailwind CSS",
      "React Router",
      "Vercel",
    ],
    liveUrl: "portfolio-2-kappa-six.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/portfolio-2",
    role: "Frontend Developer",
    duration: "1 week",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
    features: [
      "Responsive design",
      "Component-based architecture",
      "Simple animations",
      "Project showcase",
    ],
  },
  {
    id: "3",
    title: "Western Website",
    description: "Just design a simple website using HTML and CSS with responsive design.",
    longDescription:
      "A clean, responsive website built with pure HTML and CSS. This project demonstrates my understanding of fundamental web technologies and responsive design principles without any frameworks or libraries.",
    image: "/project/western.png",
    modalImage: "/project/western.png",
    images: [
      "/project/western.png",
      "/project/western2.png",
    ],
    gallery: [
      "/project/western.png",
      "/project/western2.png",
    ],
    tags: ["HTML", "CSS"],
    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "Grid",
      "Media Queries",
      "Vercel",
    ],
    liveUrl: "https://western-lp.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/western",
    role: "Frontend Developer",
    duration: "3 days",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
    features: [
      "Fully responsive design",
      "Clean semantic HTML",
      "Modern CSS styling",
      "Cross-browser compatibility",
    ],
  },
  {
    id: "6",
    title: "Movie Web",
    description:
      "Just design a simple website using Bootstrap with responsive design.",
    longDescription:
      "A movie-themed website built with Bootstrap, demonstrating my ability to work with popular CSS frameworks. The project showcases responsive design patterns and Bootstrap's component library.",
    image: "/project/movie.png",
    modalImage: "/project/movie2.png",
    images: [
      "/project/movie.png",
      "/project/movie2.png",
      "/project/movie3.png",
    ],
    gallery: [
      "/project/movie.png",
      "/project/movie2.png",
      "/project/movie3.png",
    ],
    tags: ["HTML", "CSS", "Bootstrap"],
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Font Awesome",
      "Vercel",
    ],
    liveUrl: "https://movie-lp-omega.vercel.app",
    sourceUrl: "https://github.com/Ahlasakdailuktnam/movie",
    role: "Frontend Developer",
    duration: "2 days",
    team: "Solo Project",
    year: "2024",
    client: "Personal Project",
    features: [
      "Bootstrap responsive grid",
      "Component-based design",
      "Clean typography",
      "Modern UI patterns",
    ],
  },
];