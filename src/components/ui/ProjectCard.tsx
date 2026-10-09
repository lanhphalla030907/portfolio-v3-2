// components/ProjectCard.tsx
"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink, Building, X } from "lucide-react";
import { useState, useRef } from "react";
import { Project } from "@/data/projects";

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-zinc-100/70 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/70 dark:text-zinc-300">
    {children}
  </span>
);

// --- Project Card ---

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

export const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-50px",
  });

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
            priority={index === 0}
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
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1">
          {project.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
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

// --- Project Dialog (Clean minimal design with scroll) ---

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDialog = ({
  project,
  isOpen,
  onClose,
}: ProjectDialogProps) => {
  if (!project || !isOpen) return null;

  const displayImage = project.modalImage || project.image;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image section - fixed height */}
        <div className="relative bg-gray-50 dark:bg-gray-900/50 flex-shrink-0">
          <div className="aspect-[16/9] relative">
            <Image
              src={displayImage}
              alt={project.title}
              fill
              className="object-contain "
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 transition-colors border border-gray-200/60 dark:border-gray-700/60"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content section - scrollable */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {project.description}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                Features
              </h4>
              <ul className="space-y-1">
                {project.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3.5 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Live Demo <ExternalLink size={12} />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
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