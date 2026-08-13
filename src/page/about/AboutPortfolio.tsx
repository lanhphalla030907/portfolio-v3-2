"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Pause,
  Sparkles,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Timeline } from "@/components/ui/timeline";
import { SpinningText } from "@/components/ui/spinning-text";
import LogoLoop from "@/components/ui/LogoLoop";
import SectionTitle from "@/components/SectionTitle";
import { convertTechToLogoItems } from "@/utils/logoHelpers";
import { getAllTechnologies } from "@/data/techStack";
import { capabilitiesData } from "@/data/capabilities";
import { timelineData } from "@/data/timeline";

export default function AboutPortfolio() {
  const allTechnologies = useMemo(() => getAllTechnologies(), []);
  const logoItems = useMemo(
    () => convertTechToLogoItems(allTechnologies),
    [allTechnologies],
  );

  // Music Player State
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Failed to play audio:", error);
    }
  };

  return (
    <PageLayout>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/music/daydreamer.mp3"
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Hero Section */}
      <section
        id="homeabout"
        className="relative z-10 flex min-h-[44rem] items-center pt-28 sm:min-h-screen"
      >
        <div className="site-container grid items-center py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[400px]"
          >
            {/* Floating Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[0.78] overflow-hidden bg-[#0d0d10]"
              style={{
                borderRadius: "10px 10px 180px 160px",
              }}
            >
              <Image
                src="/aboutme.png"
                alt="Lanh Phalla"
                fill
                priority
                sizes="(max-width:1024px)100vw,400px"
                className="object-cover object-center"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Logo */}
              <div className="absolute left-6 top-6 text-white">
                <Code2 size={22} />
              </div>
            </motion.div>

            {/* Spinning Button - Music Player */}
            <div className="absolute bottom-6 right-5 z-20">
              <div className="relative h-[145px] w-[145px]">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full bg-[#121216] shadow-[0_25px_60px_rgba(0,0,0,0.45)] flex items-center justify-center">
                  <SpinningText className="text-[13px] uppercase tracking-[0.3em] font-medium text-white">
                    {isPlaying ? "NOW PLAYING • DAY DREAMER •" : "PLAY MUSIC • PLAY MUSIC • PLAY MUSIC •"}
                  </SpinningText>
                </div>

                {/* Middle Ring */}
                <div className="absolute left-1/2 top-1/2 h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0d0d1] flex items-center justify-center">
                  {/* Music Button */}
                  <button
                    onClick={toggleMusic}
                    className="group flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/10 bg-[#17171d] transition-all duration-300 hover:scale-110 hover:bg-white"
                  >
                    {isPlaying ? (
                      <Pause
                        size={22}
                        className="text-white transition-colors duration-300 group-hover:text-black"
                      />
                    ) : (
                      <ArrowUpRight
                        size={22}
                        className="text-white transition-all duration-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
              <span className="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_2px_rgba(99,102,241,.45)]" />
              About me
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.9] tracking-tighter text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Code with{" "}
              <span className="text-indigo-500 dark:text-indigo-300">
                purpose.
              </span>
              <br />
              Build with care.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              I&apos;m Lanh Phalla, a Full Stack Developer passionate about
              building modern web applications with React, Next.js, Laravel, and
              embedded systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                My journey{" "}
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/50 px-5 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-zinc-500"
              >
                View projects{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Loop */}
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
        />
      </div>

      {/* Developer Mindset Section */}
      <section id="mindset" className="relative z-10 py-24 sm:py-32">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="Developer mindset"
            title="Simple experiences are built from thoughtful details."
          />
          <div
            data-reveal
            className="rounded-[1.6rem] border border-zinc-200/70 bg-white/65 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8"
          >
            <ScrollReveal
              baseOpacity={0.16}
              enableBlur
              baseRotation={1.5}
              blurStrength={3}
            >
              I care about clean code, useful interfaces, and solving real
              problems. Every project is a chance to turn an idea into something
              people can understand, use, and trust.
            </ScrollReveal>
            <p className="mt-7 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              I enjoy connecting product design to practical engineering — from
              responsive UI details to APIs, database structure, and everything
              between them.
            </p>
          </div>
        </div>
      </section>

    
      <section id="timeline" className="relative z-10 py-10 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Timeline data={timelineData} />
        </div>
      </section>
    </PageLayout>
  );
}