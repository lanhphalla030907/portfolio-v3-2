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
        preload="auto"
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

      {/* Education Section */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="site-container">
          <SectionTitle
            eyebrow="Education & focus"
            title="Grounded in computer science. Growing through practice."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article
              data-reveal
              className="rounded-[1.6rem] border border-zinc-200/70 bg-white/65 p-7 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-9"
            >
              <GraduationCap className="size-6 text-indigo-500 dark:text-indigo-300" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Education
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Computer Science
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Royal University of Phnom Penh
              </p>
              <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Building strong foundations in software engineering, data, and
                systematic problem solving.
              </p>
            </article>
            <article
              data-reveal
              className="rounded-[1.6rem] border border-indigo-200/60 bg-gradient-to-br from-indigo-100/70 to-white/60 p-7 shadow-sm backdrop-blur-sm dark:border-indigo-400/20 dark:from-indigo-500/15 dark:to-zinc-900/50 sm:p-9"
            >
              <Sparkles className="size-6 text-indigo-500 dark:text-indigo-300" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Now building
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Production-ready habits
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                A practical journey toward full stack engineering.
              </p>
              <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Improving architecture, communication, and product thinking with
                every project I ship.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative z-10 border-y border-zinc-200/70 bg-zinc-50/70 py-24 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-32">
        <div className="site-container">
          <SectionTitle
            eyebrow="What I do"
            title="One product, connected from interface to infrastructure."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilitiesData.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  data-reveal
                  whileHover={{ y: -7 }}
                  className="group rounded-[1.5rem] border border-zinc-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-indigo-400/50"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 transition-transform group-hover:scale-110 dark:bg-indigo-400/10 dark:text-indigo-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="site-container text-center">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-300"
          >
            Developer philosophy
          </p>
          <blockquote
            data-reveal
            className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Clean code is not only code that works.{" "}
            <span className="text-zinc-400 dark:text-zinc-500">
              It is code that people can understand, maintain, and improve.
            </span>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div
          data-reveal
          className="site-container overflow-hidden rounded-[2rem] border border-indigo-200/70 bg-gradient-to-br from-indigo-100 via-white to-violet-100 px-6 py-16 text-center shadow-[0_20px_60px_rgba(99,102,241,.15)] dark:border-indigo-400/20 dark:from-indigo-500/20 dark:via-zinc-900 dark:to-violet-500/20 sm:px-12 sm:py-24"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            Looking forward
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            My goal is to become a professional full stack engineer and build
            impactful digital products.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:landphalll@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950"
            >
              <ArrowRight className="size-4" /> Contact me
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
            >
              View projects <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}