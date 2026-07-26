// components/SelectedProjects.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { ProjectCard, ProjectDialog, Badge } from "./ui/ProjectCard";
import { Project, projects } from "@/data/projects";
import Link from "next/link";

// --- Hooks ---

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

// --- Project Item Component (Same as featured design) ---

const ProjectItem = ({ 
  project, 
  index, 
  onOpen 
}: { 
  project: Project; 
  index: number; 
  onOpen: (p: Project) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="mb-12 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <motion.div 
          className={`relative bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${
            index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'
          }`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="aspect-[4/3] relative bg-gray-50 dark:bg-gray-900/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain px-3 "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-medium px-3 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                Featured
              </span>
            </div>
          )}
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          className={`space-y-4 ${
            index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 + index * 0.1 }}
              >
                <Badge>{tag}</Badge>
              </motion.div>
            ))}
          </motion.div>

          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="space-y-1.5"
            >
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            whileHover={{ x: 5 }}
            onClick={() => onOpen(project)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View Project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};



export default function SelectedProjects() {
  const [dialogProject, setDialogProject] = useState<Project | null>(null);
  const { springX, springY } = useCursorGlow();

  // Sort projects: featured first, then others
  const sortedProjects = [...projects]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .slice(0, 4); 

  return (
    <section id="select-project" className="site-container relative py-16">
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Selected Work
        </h2>
        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mt-3" />
        <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-md">
          A curated collection of projects exploring design, technology, and
          craftsmanship.
        </p>
      </motion.div>

      {/* All Projects with same split-screen design */}
      <div className="space-y-12">
        {sortedProjects.map((project, idx) => (
          <ProjectItem
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
        className="mt-16 pt-10 border-t border-gray-200/60 dark:border-gray-700/60 text-center"
      >
        <Link href="/project">
        <InteractiveHoverButton>View More</InteractiveHoverButton>
        </Link>
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