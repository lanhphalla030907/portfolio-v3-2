import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

// Import images
import basic from "@/assets/basic.jpg";
import backend from "@/assets/backend.png";
import intern from "@/assets/intern.png";
import design from "@/assets/web.jpg";
import front from "@/assets/front.jpg";
import image2 from "@/assets/image2.png";
import spring from "@/assets/spring.png";
import bacll from "@/assets/bacll.jpg";
import image from "@/assets/image.png";

export interface TechSkill {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export interface TimelineItem {
  title: string;
  date: string;
  institution?: string;
  description: string;
  technologies: TechSkill[];
  images: (string | StaticImageData)[];
  type?: "course" | "education" | "certificate";
}

// Helper function to render timeline content
export const renderTimelineContent = (item: TimelineItem) => {
  const IconComponent = item.type === "education" ? FaLaptopCode : 
                        item.type === "certificate" ? FaCode : FaServer;

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <IconComponent className="text-indigo-500 dark:text-indigo-400 text-xl" />
        <p className="text-lg md:text-4xl font-medium text-gray-800 dark:text-gray-200">
          {item.title}
        </p>
      </div>
      
      {item.institution && (
        <p className="text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-medium mb-2">
          {item.institution}
        </p>
      )}
      
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4">
        {item.description}
      </p>

      {/* Technologies Used */}
      {item.technologies.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Technologies Used
          </p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                <span className="text-base" style={{ color: tech.color || "currentColor" }}>
                  {tech.icon}
                </span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Images */}
      {item.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${item.title} - Image ${index + 1}`}
              width={800}
              height={300}
              className="h-48 md:h-70 w-full rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const timelineData: TimelineItem[] = [
  {
    title: "Finish Bacll 2024",
    date: "Novem 2024",
    institution: "Bacll II High School",
    description: "Completed high school education with a focus on mathematics and sciences, building a strong foundation for future studies in technology.",
    technologies: [
     
    ],
    images: [bacll],
    type: "education",
  },
  {
    title: "C and C++ Programming",
    date: "June 2025",
    institution: "Etec Center",
    description: "Learned fundamental programming concepts including variables, loops, functions, pointers, memory management, and data structures using C and C++.",
    technologies: [
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Data Structures", icon: <FaCode />, color: "#8B5CF6" },
      { name: "Algorithms", icon: <FaCode />, color: "#F59E0B" },
    ],
    images: [basic],
    type: "course",
  },
  {
    title: "Web Design",
    date: "July 2025",
    institution: "Etec Center",
    description: "Mastered HTML5, CSS3, and modern web design principles. Learned responsive design, CSS frameworks, UI/UX fundamentals, and creating visually appealing websites.",
    technologies: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Responsive Design", icon: <FaCode />, color: "#06B6D4" },
      { name: "UI/UX", icon: <FaCode />, color: "#8B5CF6" },
    ],
    images: [design],
    type: "course",
  },
  {
    title: "Web Frontend Development",
    date: "Dec 2026",
    institution: "Etec Center",
    description: "Advanced frontend development with modern JavaScript frameworks. Built interactive single-page applications using React, Next.js, and TypeScript.",
    technologies: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
    ],
    images: [front],
    type: "course",
  },
  {
    title: "Web Backend Development",
    date: "June 2026",
    institution: "Etec Center",
    description: "Built robust server-side applications with Node.js, Express, and databases. Learned API development, authentication, and server deployment.",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "REST APIs", icon: <FaServer />, color: "#10B981" },
    ],
    images: [backend],
    type: "course",
  },
  {
    title: "Internship Program",
    date: "June 2026",
    institution: "Etec Center",
    description: "Gained practical industry experience working on real-world projects. Collaborated with teams and applied development skills in a professional environment.",
    technologies: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Agile", icon: <FaCode />, color: "#8B5CF6" },
      { name: "Team Collaboration", icon: <FaCode />, color: "#F59E0B" },
    ],
    images: [intern],
    type: "certificate",
  },
  {
    title: "Web Full Stack Development",
    date: "Aug 2026",
    institution: "New Information Technology",
    description: "Comprehensive full-stack development training covering both frontend and backend technologies. Built complete web applications from scratch with modern architectures.",
    technologies: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    ],
    images: [image2],
    type: "course",
  },
  {
    title: "Spring Boot & Java",
    date: "Present",
    institution: "Etec Center",
    description: "Advanced backend development with Spring Boot framework and Java. Building enterprise-level applications with microservices architecture.",
    technologies: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Maven", icon: <FaCode />, color: "#C71A36" },
      { name: "Microservices", icon: <FaServer />, color: "#8B5CF6" },
    ],
    images: [spring],
    type: "course",
  },
  {
    title: "Computer Science",
    date: "Present",
    institution: "Royal University of Phnom Penh",
    description: "Pursuing a Bachelor's degree in Computer Science. Studying software engineering, data structures, algorithms, database systems, and computer architecture.",
    technologies: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Data Structures", icon: <FaDatabase />, color: "#8B5CF6" },
      { name: "Algorithms", icon: <FaCode />, color: "#F59E0B" },
      { name: "Database Design", icon: <FaDatabase />, color: "#06B6D4" },
      { name: "Software Engineering", icon: <FaCode />, color: "#10B981" },
    ],
    images: [image],
    type: "education",
  },
];

// Helper function to get timeline items by type
export const getTimelineByType = (type: "course" | "education" | "certificate") => {
  return timelineData.filter(item => item.type === type);
};

// Helper function to get timeline by year
export const getTimelineByYear = (year: string) => {
  return timelineData.filter(item => item.date.includes(year));
};

// Helper function to get all unique technologies from timeline
export const getAllTimelineTechnologies = () => {
  const techSet = new Set<string>();
  const techList: TechSkill[] = [];
  
  timelineData.forEach(item => {
    item.technologies.forEach(tech => {
      if (!techSet.has(tech.name)) {
        techSet.add(tech.name);
        techList.push(tech);
      }
    });
  });
  
  return techList;
};

// Helper function to get timeline items by institution
export const getTimelineByInstitution = (institution: string) => {
  return timelineData.filter(item => item.institution?.includes(institution));
};

// Helper function to get the latest timeline items
export const getLatestTimelineItems = (count: number = 3) => {
  return [...timelineData].reverse().slice(0, count);
};