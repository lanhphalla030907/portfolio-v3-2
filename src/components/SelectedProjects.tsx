"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Building,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  features?: string[];
}

// --- sample data ---
const projects: Project[] = [
  {
    id: "1",
    title: "Smart Attendance System",
    description:
      "RFID attendance tracking with real-time analytics and automated reporting",
    image: "/placeholder-attendance.jpg",
    tags: ["React", "Laravel", "ESP32"],
    featured: true,
    liveUrl: "#",
    sourceUrl: "#",
    features: [
      "Real-time RFID scanning",
      "Dashboard analytics",
      "Export reports",
    ],
  },
  {
    id: "2",
    title: "Smart Pharmacy",
    description:
      "Inventory & prescription management platform with role-based access",
    image: "/placeholder-pharmacy.jpg",
    tags: ["React", "PHP", "MySQL"],
    liveUrl: "#",
    sourceUrl: "#",
    features: [
      "Stock tracking",
      "Prescription validation",
      "Role-based access",
    ],
  },
  {
    id: "3",
    title: "Portfolio Builder",
    description: "Drag-and-drop toolkit for creatives to showcase their work",
    image: "/placeholder-portfolio.jpg",
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
    tags: ["Vue", "D3", "Express"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

// --- Cursor glow (subtle) ---
const useCursorGlow = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [cursorX, cursorY]);

  return { springX, springY };
};

// --- components ---

const BrowserWindow = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-xl overflow-hidden shadow-sm ${className}`}
  >
    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50/30 dark:bg-gray-800/30">
      <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
      <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
      <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
      <div className="ml-3 text-[10px] text-gray-400 dark:text-gray-500 bg-white/60 dark:bg-gray-700/60 px-2 py-0.5 rounded border border-gray-200/60 dark:border-gray-600/60 flex items-center gap-1.5">
        <Monitor size={10} />
        <span>project.dev</span>
      </div>
    </div>
    <div>{children}</div>
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 text-xs px-2.5 py-0.5 rounded-full font-medium tracking-wide border border-gray-200/40 dark:border-gray-600/40">
    {children}
  </span>
);

// --- Project Card with 2-column grid ---
const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-50px",
  });

  // Unique scroll animation per card
  const getScrollAnimation = (idx: number) => {
    const animations = [
      { opacity: 0, x: -40 },
      { opacity: 0, x: 40 },
      { opacity: 0, y: 30 },
      { opacity: 0, y: -30 },
    ];
    return animations[idx % animations.length];
  };

  return (
    <motion.div
      ref={ref}
      initial={getScrollAnimation(index)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(project)}
      className="group bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/30 transition-all duration-300"
    >
      <div className="overflow-hidden bg-gray-50 dark:bg-gray-900/50 relative">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="aspect-[16/9] relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.08 : 0 }}
            className="absolute inset-0 bg-black"
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="pt-2 flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          <span>Explore project</span>
          <motion.span
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block ml-1.5"
          >
            <ArrowRight size={16} />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

// --- Dialog ---
const ProjectDialog = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!project || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg border border-gray-200/60 dark:border-gray-700/60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-xl leading-none transition"
            >
              ✕
            </button>
          </div>
          <BrowserWindow className="border-0 shadow-none">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </BrowserWindow>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {project.description}
          </p>
          {project.features && (
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Features
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-0.5">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3.5 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Live Demo <ExternalLink size={12} />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3.5 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Source Code <Building size={12} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Component ---
export default function SelectedProjects() {
  const [dialogProject, setDialogProject] = useState<Project | null>(null);
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const { springX, springY } = useCursorGlow();

  return (
    <section id="projects" className="site-container relative py-16">
      {/* Subtle cursor glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full bg-gray-200/10 dark:bg-gray-600/10 blur-3xl"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white">
          Selected Work
        </h2>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mt-3" />
        <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-md">
          A curated collection of projects exploring design, technology, and
          craftsmanship.
        </p>
      </motion.div>

      {/* Featured Project */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <BrowserWindow>
            <div className="aspect-[21/9] bg-gray-100 dark:bg-gray-700 relative">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>
          </BrowserWindow>
          <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                {featured.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-base mt-0.5">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
            <button
              onClick={() => setDialogProject(featured)}
              className="group flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap"
            >
              View Project
              <ChevronRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      )}

      {/* Project Grid - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {others.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onOpen={setDialogProject}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 pt-10 border-t border-gray-200/60 dark:border-gray-700/60 text-center"
      >
        <InteractiveHoverButton>View More </InteractiveHoverButton>
      </motion.div>

      {/* Dialog */}
      <ProjectDialog
        project={dialogProject}
        isOpen={!!dialogProject}
        onClose={() => setDialogProject(null)}
      />
    </section>
  );
}
