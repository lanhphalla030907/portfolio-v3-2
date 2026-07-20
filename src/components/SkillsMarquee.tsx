"use client";

import { Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const items = [
  "Animations",
  "Community",
  "Development",
  "Mentor",
  "Websites",
  "Designing",
];

export default function SkillsMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-zinc-200  sm:py-8 md:py-10 lg:py-12 dark:border-zinc-800">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white to-transparent dark:from-black" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-white to-transparent dark:from-black" />

      <Marquee pauseOnHover className="[--duration:35s] py-5 lg:py-0">
        {items.map((item) => (
          <div key={item} className="mx-6 sm:mx-8 md:mx-10 lg:mx-12 flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-400 transition-colors duration-300 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white whitespace-nowrap">
              {item}
            </h2>

            <Sparkles
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-zinc-300 dark:text-zinc-700 flex-shrink-0"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}