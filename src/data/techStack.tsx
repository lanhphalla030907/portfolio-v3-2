
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiSpringboot,
  SiPython,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiRedis,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  percentage: number;
}

export interface TechCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  technologies: TechItem[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Frontend",
    icon: <SiReact className="text-xl" />,
    color: "from-blue-500 to-cyan-400",
    technologies: [
      { name: "React", icon: <SiReact />, color: "#61DAFB", percentage: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", percentage: 85 },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", percentage: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", percentage: 92 },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", percentage: 95 },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", percentage: 98 },
    ],
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="text-xl" />,
    color: "from-green-500 to-emerald-400",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", percentage: 85 },
      { name: "Express.js", icon: <SiExpress />, color: "#000000", percentage: 82 },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20", percentage: 78 },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", percentage: 70 },
      { name: "Python", icon: <SiPython />, color: "#3776AB", percentage: 75 },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4", percentage: 80 },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-xl" />,
    color: "from-purple-500 to-pink-400",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", percentage: 80 },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", percentage: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", percentage: 78 },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", percentage: 75 },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E", percentage: 70 },
      { name: "Redis", icon: <SiRedis />, color: "#DC382D", percentage: 65 },
    ],
  },
];

// Helper function to get all technologies as flat array
export const getAllTechnologies = (): TechItem[] => {
  return techStackData.flatMap(category => category.technologies);
};

// Helper function to get technology by name
export const getTechByName = (name: string): TechItem | undefined => {
  return getAllTechnologies().find(tech => tech.name === name);
};

// Helper function to get technologies by category
export const getTechByCategory = (categoryTitle: string): TechItem[] | undefined => {
  const category = techStackData.find(cat => cat.title === categoryTitle);
  return category?.technologies;
};