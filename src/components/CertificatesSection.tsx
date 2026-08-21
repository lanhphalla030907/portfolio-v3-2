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

const certificateItems = timelineData.filter(
  (item) => item.type === "certificate" || item.type === "course",
);

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onOpen(item)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 dark:border-zinc-800/70 dark:bg-zinc-900/80 dark:hover:border-zinc-700"
    >
      {/* Certificate Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {cover && (
          <Image
            src={cover}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/95 dark:bg-zinc-900/95 px-6 py-2.5 rounded-full text-sm font-medium text-zinc-900 dark:text-white shadow-lg flex items-center gap-2">
            View Certificate
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>
            {item.institution && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {item.institution}
              </p>
            )}
          </div>
          <span className="shrink-0 text-sm font-medium text-zinc-400 dark:text-zinc-500">
            {item.date}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <Award className="size-3.5 text-indigo-500" />
            {item.type === "certificate" ? "Certificate" : "Course"}
          </span>
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </motion.div>
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
    setCurrentIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length);
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
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mt-4">
            Certificates & Courses
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 max-w-lg mx-auto">
            Professional development and learning milestones
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateItems.map((item, index) => (
            <CertificateCard
              key={item.title}
              item={item}
              index={index}
              onOpen={(item) => {
                setSelected(item);
                setCurrentIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200"
              >
                <X className="size-5" />
              </button>

              {/* Image */}
              <div className="relative w-full bg-zinc-100 dark:bg-zinc-800" style={{ height: "65vh", maxHeight: "600px" }}>
                <Image
                  src={selected.images[currentIndex]}
                  alt={selected.title}
                  fill
                  className="object-contain p-4"
                  priority
                />

                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selected.images.map((_, i) => (
                        <button
                          key={i}
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {selected.title}
                    </h3>
                    {selected.institution && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                        <Building2 className="size-4" />
                        {selected.institution}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-medium text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                    <CalendarDays className="size-4" />
                    {selected.date}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    <Award className="size-3.5 text-indigo-500" />
                    {selected.type === "certificate" ? "Certificate" : "Course"}
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