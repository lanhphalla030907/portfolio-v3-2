// components/CertificatesSection.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
} from "lucide-react";
import { timelineData, type TimelineItem } from "@/data/timeline";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const certificateItems = timelineData.filter(
  (item) => item.type === "certificate" || item.type === "course",
);

const featuredItem =
  certificateItems.find((item) => item.type === "certificate") ??
  certificateItems[0];
const gridItems = certificateItems.filter((item) => item !== featuredItem);

function TypeChip({ type }: { type?: TimelineItem["type"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
      <Award className="size-3" />
      {type === "certificate" ? "Certificate" : "Course"}
    </span>
  );
}

function FeaturedCard({ item, onOpen }: { item: TimelineItem; onOpen: (item: TimelineItem) => void }) {
  const cover = item.images[0];

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group mt-12 grid w-full overflow-hidden rounded-[1.5rem] border border-zinc-200/70 bg-white/60 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-300/70 hover:shadow-xl sm:mt-14 dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:border-indigo-500/30 md:grid-cols-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 md:aspect-auto md:min-h-[20rem]">
        {cover && (
          <Image
            src={cover}
            alt={item.title}
            fill
            className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        <div className="absolute left-4 top-4 md:hidden">
          <TypeChip type={item.type} />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div className="hidden md:block">
          <TypeChip type={item.type} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-3xl dark:text-white dark:group-hover:text-indigo-400">
            {item.title}
          </h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="size-3.5" />
              {item.institution}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {item.date}
            </span>
          </p>
        </div>

        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          View certificate
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}

function CertificateCard({
  item,
  index,
  onOpen,
}: {
  item: TimelineItem;
  index: number;
  onOpen: (item: TimelineItem) => void;
}) {
  const cover = item.images[0];

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-lg dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:hover:border-indigo-500/30"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {cover && (
          <Image
            src={cover}
            alt={item.title}
            fill
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-zinc-900/95 dark:text-white">
          View certificate
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
            {item.title}
          </h3>
          <span className="shrink-0 text-xs font-medium text-zinc-400 dark:text-zinc-500">
            {item.date}
          </span>
        </div>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {item.institution}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <TypeChip type={item.type} />
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-indigo-400">
            View
            <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function CertificatesSection() {
  const [selected, setSelected] = useState<TimelineItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const close = useCallback(() => {
    setSelected(null);
    setCurrentIndex(0);
  }, []);

  const next = useCallback(() => {
    if (!selected) return;
    setCurrentIndex((prev) => (prev + 1) % selected.images.length);
  }, [selected]);

  const prev = useCallback(() => {
    if (!selected) return;
    setCurrentIndex(
      (prev) => (prev - 1 + selected.images.length) % selected.images.length,
    );
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, next, prev]);

  return (
    <section id="certificates" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200/25 via-transparent to-transparent dark:from-indigo-900/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200/40 via-transparent to-transparent dark:from-zinc-800/20" />

      <div className="site-container relative">
        {/* Header — site-standard pill + heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <span className="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_2px_rgba(99,102,241,.45)]" />
            Achievements
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
            Certificates &amp; Courses
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-zinc-500 sm:text-base dark:text-zinc-400">
            Professional development and learning milestones.
          </p>
        </motion.div>

        {/* Featured certificate */}
        {featuredItem && (
          <FeaturedCard item={featuredItem} onOpen={setSelected} />
        )}

        {/* Course grid — perfect 3×2 */}
        {gridItems.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridItems.map((item, index) => (
              <CertificateCard
                key={item.title}
                item={item}
                index={index}
                onOpen={setSelected}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-2xl dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              {/* Close */}
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 p-2.5 text-white transition-all duration-200 hover:bg-black/70"
              >
                <X className="size-5" />
              </button>

              {/* Image */}
              <div
                className="relative w-full bg-zinc-100 dark:bg-zinc-800"
                style={{ height: "65vh", maxHeight: "600px" }}
              >
                <Image
                  src={selected.images[currentIndex]}
                  alt={selected.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1024px"
                  className="object-contain p-4"
                />

                {selected.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white transition-all duration-200 hover:bg-black/70"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white transition-all duration-200 hover:bg-black/70"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {selected.images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Show image ${i + 1}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(i);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === currentIndex
                              ? "w-8 bg-white"
                              : "w-2 bg-white/40 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                      {selected.title}
                    </h3>
                    {selected.institution && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                        <Building2 className="size-4" />
                        {selected.institution}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                    <CalendarDays className="size-4" />
                    {selected.date}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  <TypeChip type={selected.type} />
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {currentIndex + 1} / {selected.images.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
