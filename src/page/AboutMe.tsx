// src/page/AboutMe.tsx
import ScrollReveal from "@/components/ScrollReveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="about" className="relative flex min-h-[34rem] items-center py-20 lg:min-h-screen lg:py-0">
      <div className="site-container w-full">
        {/* Label */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 text-blue text-xl font-semibold uppercase tracking-widest">
            <span className="text-2xl">✦</span>
            About Me
          </div>
        </div>

        {/* Main Text */}
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur
            baseRotation={2}
            blurStrength={3}
          >
            I'm Lanh Phalla, a passionate Web Developer with strong experience
            building modern web applications using React, Next.js, Laravel and
            embedded systems. I focus on creating clean, scalable and meaningful
            digital experiences that combine great design with powerful
            technology.
          </ScrollReveal>
          <div className="mt-8 flex justify-center">
            <Link href="/about">
              <InteractiveHoverButton>View More About Me</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}