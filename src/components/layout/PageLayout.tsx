// src/components/layout/PageLayout.tsx
"use client";

import { useLayoutEffect, useRef, ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Navbar } from "@/page/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import LightRays from "@/components/ui/LightRays";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  enableSmoothScroll?: boolean;
  raysColor?: string;
  raysSpeed?: number;
  showNavbar?: boolean;
  showThemeToggle?: boolean;
  backgroundClassName?: string;
}

export default function PageLayout({
  children,
  className = "",
  enableSmoothScroll = true,
  raysColor = "#6366f1",
  raysSpeed = 0.45,
  showNavbar = true,
  showThemeToggle = true,
  backgroundClassName = "",
}: PageLayoutProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  // --- Setup Smooth Scroll & GSAP ---
  useLayoutEffect(() => {
    if (
      !rootRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !enableSmoothScroll
    )
      return;

    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    const update = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);

    // GSAP animations for elements with data-reveal attribute
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    // Cleanup
    return () => {
      context.revert();
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [enableSmoothScroll]);

  return (
    <main
      ref={rootRef}
      className={`relative min-h-screen overflow-x-clip bg-white font-sans text-zinc-900 transition-colors duration-500 dark:bg-zinc-950 dark:text-zinc-100 ${className}`}
    >
      <div className={`fixed inset-0 z-0 pointer-events-none ${backgroundClassName}`}>
        {/* Light Rays */}
        <div className="absolute inset-0 opacity-35 dark:opacity-55">
          <LightRays
            raysOrigin="top-center"
            raysColor={raysColor}
            raysSpeed={raysSpeed}
            lightSpread={1.2}
            rayLength={1.8}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.07),transparent_65%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.12),transparent_65%)]" />
      </div>

      {showNavbar && <Navbar />}
      {showThemeToggle && <ThemeToggle />}

      <div className="relative z-10">{children}</div>
    </main>
  );
}