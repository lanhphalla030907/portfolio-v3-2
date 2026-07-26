// src/app/page.tsx
"use client";

import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import HomePage from "@/page/HomePage";
import AboutMe from "@/page/AboutMe";
import ContactPage from "@/page/ContactPage";
import TechStack from "@/components/TechStack";
import SelectedProjects from "@/components/SelectedProjects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <PageLayout>
      <div className="overflow-x-clip">
        <HomePage />
        <AboutMe />
        <TechStack />
        <SelectedProjects />
        <ContactPage />
        
        {/* CTA Section */}
        <section className="relative z-10 pb-24 sm:pb-32">
          <div
            data-reveal
            className="site-container overflow-hidden rounded-[2rem] border border-indigo-200/70 px-6 py-16 text-center shadow-[0_20px_60px_rgba(99,102,241,.15)] dark:border-indigo-400/20 dark:from-indigo-500/20 dark:via-zinc-900 dark:to-violet-500/20 sm:px-12 sm:py-24"
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
                View projects
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
        
      </div>
    </PageLayout>
  );
}