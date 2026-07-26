"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { FaGraduationCap, FaCertificate, FaLaptopCode } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TimelineItem } from "@/data/timeline";

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Get icon based on type
  const getTypeIcon = (type?: string) => {
  switch(type) {
    case "education":
      return <FaGraduationCap className="text-2xl text-gray-700 dark:text-gray-300" />;
    case "certificate":
      return <FaCertificate className="text-2xl text-gray-700 dark:text-gray-300" />;
    default:
      return <FaLaptopCode className="text-2xl text-gray-700 dark:text-gray-300" />;
  }
};

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-lg font-bold md:text-5xl mb-4 text-black dark:text-white">
          My Learning Journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          A timeline of my education, courses, and certifications in technology.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.date}
              </h3>
              
              {/* Content */}
              <div>
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">
                    {getTypeIcon(item.type)}
                  </span>
                  <p className="text-lg md:text-4xl font-medium text-gray-800 dark:text-gray-200">
                    {item.title}
                  </p>
                </div>
                
                {/* Institution */}
                {item.institution && (
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {item.institution}
                  </p>
                )}
                
                {/* Description */}
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>

                {/* Technologies Used */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
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
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {item.images.map((img, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={img}
                        alt={`${item.title} - Image ${imgIndex + 1}`}
                        width={800}
                        height={300}
                        className="h-48 md:h-64 w-full rounded-lg object-cover shadow-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-neutral-700 to-transparent from-[0%] via-[10%] rounded-full dark:from-neutral-300"
          />
        </div>
      </div>
    </div>
  );
};