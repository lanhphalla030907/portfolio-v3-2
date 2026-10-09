// data/techStack.ts
import type { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiSpringboot,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFlyway,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiSwagger,
} from "react-icons/si";
import { FaDatabase, FaTools } from "react-icons/fa";
import { FaCss3Alt, FaBootstrap } from "react-icons/fa6";

export interface TechItem {
  name: string;
  icon: ReactNode;
  color: string;
  percentage: number;
}

export interface TechCategory {
  title: string;
  icon: ReactNode;
  color: string;
  technologies: TechItem[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Frontend",
    icon: <SiReact className="text-xl" />,
    color: "from-blue-500 to-cyan-400",
    technologies: [
      { name: "HTML5",        icon: <SiHtml5 />,        color: "#E34F26", percentage: 95 },
      { name: "CSS3",         icon: <FaCss3Alt />,      color: "#1572B6", percentage: 95 },
      { name: "JavaScript",   icon: <SiJavascript />,   color: "#F7DF1E", percentage: 85 },
      { name: "TypeScript",   icon: <SiTypescript />,   color: "#3178C6", percentage: 80 },
      { name: "React",        icon: <SiReact />,        color: "#61DAFB", percentage: 90 },
      { name: "Next.js",      icon: <SiNextdotjs />,    color: "#000000", percentage: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />,  color: "#06B6D4", percentage: 92 },
      { name: "Bootstrap",    icon: <FaBootstrap />,    color: "#7952B3", percentage: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="text-xl" />,
    color: "from-green-500 to-emerald-400",
    technologies: [
      { name: "Node.js",     icon: <SiNodedotjs />,  color: "#339933", percentage: 75 },
      { name: "Express.js",  icon: <SiExpress />,    color: "#000000", percentage: 75 },
      { name: "NestJS",      icon: <SiNestjs />,     color: "#E0234E", percentage: 80 },
      { name: "PHP",         icon: <SiPhp />,        color: "#777BB4", percentage: 80 },
      { name: "Laravel",     icon: <SiLaravel />,    color: "#FF2D20", percentage: 85 },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", percentage: 75 },
    ],
  },
  {
    title: "Database & ORM",
    icon: <FaDatabase className="text-xl" />,
    color: "from-purple-500 to-pink-400",
    technologies: [
      { name: "MySQL",      icon: <SiMysql />,      color: "#4479A1", percentage: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", percentage: 70 },
      { name: "Prisma",     icon: <SiPrisma />,     color: "#2D3748", percentage: 70 },
      { name: "Flyway",     icon: <SiFlyway />,     color: "#CC0200", percentage: 65 },
    ],
  },
  {
    title: "Development Tools",
    icon: <FaTools className="text-xl" />,
    color: "from-orange-500 to-yellow-400",
    technologies: [
      { name: "Git",     icon: <SiGit />,     color: "#F05032", percentage: 75 },
      { name: "GitHub",  icon: <SiGithub />,  color: "#181717", percentage: 75 },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37", percentage: 80 },
      { name: "Swagger", icon: <SiSwagger />, color: "#85EA2D", percentage: 65 },
      { name: "Docker",  icon: <SiDocker />,  color: "#2496ED", percentage: 60 },
    ],
  },
];

// Helper function to get all technologies as a flat array
export const getAllTechnologies = (): TechItem[] =>
  techStackData.flatMap((category) => category.technologies);

// Helper function to get technology by name (case-insensitive)
export const getTechByName = (name: string): TechItem | undefined =>
  getAllTechnologies().find(
    (tech) => tech.name.toLowerCase() === name.trim().toLowerCase()
  );

// Helper function to get technologies by category
export const getTechByCategory = (categoryTitle: string): TechItem[] | undefined =>
  techStackData.find(
    (cat) => cat.title.toLowerCase() === categoryTitle.trim().toLowerCase()
  )?.technologies;