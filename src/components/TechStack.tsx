"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoLoop from "./ui/LogoLoop";
import { techStackData, getAllTechnologies } from "@/data/techStack";
import { convertTechToLogoItems } from "@/utils/logoHelpers";

export default function TechStack() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Get all technologies from data
  const allTechnologies = useMemo(() => getAllTechnologies(), []);
  
  // Convert to LogoItems
  const logoItems = useMemo(() => convertTechToLogoItems(allTechnologies), [allTechnologies]);

  const fadeColor = isDark ? '#18181b' : '#fafafa';

  return (
    <section id="tech-stack" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/40 via-transparent to-transparent dark:from-zinc-800/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200/30 via-transparent to-transparent dark:from-zinc-800/10" />

      <div className="site-container relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 px-4 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
          >
            Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-zinc-900 dark:text-white tracking-tight"
          >
            Technologies I Work With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            A curated set of tools and frameworks I use to build modern,
            scalable applications.
          </motion.p>
        </div>

        {/* Tech Stack - Vertical List */}
        <div className="space-y-4 sm:space-y-5">
          {techStackData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 p-5 sm:p-6 transition-all duration-300 hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:shadow-lg dark:hover:shadow-zinc-800/30 hover:shadow-zinc-200/50"
            >
              <div className="flex flex-col gap-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-sm flex-shrink-0`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies - Single Row with Percentage */}
                <div className="flex flex-wrap items-center gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: categoryIndex * 0.08 + techIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                      className="group flex-1 min-w-[120px] max-w-[180px]"
                    >
                      <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/40 dark:border-zinc-700/30 transition-all duration-200 hover:border-zinc-300/60 dark:hover:border-zinc-600/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60 hover:scale-[1.02]">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="text-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                            style={{ color: tech.color || "currentColor" }}
                          >
                            {tech.icon}
                          </span>
                          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-200">
                            {tech.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.percentage}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`,
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tabular-nums min-w-[36px] text-right">
                            {tech.percentage}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Loop Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
              Technologies I Use
            </span>
          </motion.div>

        </div>
      </div>
          <div className="dark:bg-zinc-900/60 border border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-sm py-3 shadow-sm">
            <LogoLoop
              logos={logoItems}
              speed={40}
              direction="left"
              logoHeight={100}
              gap={40}
              pauseOnHover
              hoverSpeed={10}
              scaleOnHover
              fadeOut
              fadeOutColor={fadeColor}
            />
          </div>
    </section>
  );
}