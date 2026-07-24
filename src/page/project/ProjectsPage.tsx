"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Badge, ProjectDialog } from "@/components/ui/ProjectCard";
import { Project, projects } from "@/data/projects";
import BlurText from "@/components/BlurText";

// --- Project Item Component ---
const ProjectItem = ({
  project,
  index,
  onOpen,
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
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="mb-12 last:mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <motion.div
          className={`relative bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${
            index % 2 === 0 ? "order-1" : "order-1 lg:order-2"
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
            index % 2 === 0 ? "order-2" : "order-2 lg:order-1"
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
                transition={{
                  duration: 0.3,
                  delay: 0.4 + i * 0.05 + index * 0.1,
                }}
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
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + i * 0.05 + index * 0.1,
                  }}
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
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Filter Button ---
const FilterButton = ({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
      active
        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
        : "bg-gray-100/80 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    {label}
    {count !== undefined && count > 0 && (
      <span
        className={`ml-1.5 text-xs ${active ? "opacity-80" : "text-gray-400 dark:text-gray-500"}`}
      >
        {count}
      </span>
    )}
  </motion.button>
);

// --- Search Input ---
const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => (
  <div className="relative flex-1 max-w-xs">
    <Search
      size={16}
      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
    />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search projects..."
      className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all"
    />
  </div>
);

// --- Main Component ---
export default function ProjectsPage() {
  const [dialogProject, setDialogProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get all unique tags
  const allTags = projects.flatMap((p) => p.tags);
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const categories = ["All", ...Object.keys(tagCounts)];

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === "All" || p.tags.includes(filter);
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Sort: featured first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <PageLayout>
      <section id="projects" className="site-container relative py-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <BlurText
            text="Featured Projects"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold"
          />
          <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mt-3" />
          <BlurText
            text="Explore my journey through web development with projects built using React, Next.js, Laravel, and other modern technologies."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-md"
          />
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((category) => (
              <FilterButton
                key={category}
                label={category}
                active={filter === category}
                onClick={() => setFilter(category)}
                count={
                  category === "All" ? projects.length : tagCounts[category]
                }
              />
            ))}
          </div>
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Showing{" "}
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {sortedProjects.length}
          </span>{" "}
          projects
        </p>

        {/* Projects */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {sortedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectItem
                  project={project}
                  index={idx}
                  onOpen={setDialogProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found
            </p>
            <button
              onClick={() => {
                setFilter("All");
                setSearchTerm("");
              }}
              className="mt-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-gray-200/60 dark:border-gray-700/60 text-center"
        ></motion.div>

        {/* Dialog */}
        <ProjectDialog
          project={dialogProject}
          isOpen={!!dialogProject}
          onClose={() => setDialogProject(null)}
        />
      </section>
    </PageLayout>
  );
}
