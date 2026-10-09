// src/components/ProjectGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative cursor-pointer overflow-hidden rounded-xl border border-zinc-200/70 bg-zinc-100/70 ring-indigo-400/60 transition-all duration-300 hover:ring-2 dark:border-zinc-800/70 dark:bg-zinc-900/60 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "16/10" : "4/3" }}
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {index === 0 && (
                <span className="absolute bottom-2 right-2 rounded-full border border-zinc-200/70 bg-white/80 px-2 py-0.5 text-xs font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:text-zinc-300">
                  Cover
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-6xl">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/50">
                  <Image
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-contain"
                  />
                </div>

                {/* Navigation */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevImage}
                    className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors ml-4"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextImage}
                    className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors mr-4"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Image counter */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </div>

                {/* Thumbnails */}
                <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-white"
                          : "w-4 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}