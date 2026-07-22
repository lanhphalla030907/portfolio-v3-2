import React from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  copy?: string;
}

export default function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <div data-reveal className="max-w-2xl">
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        <span className="h-px w-7 bg-indigo-400" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {copy}
        </p>
      )}
    </div>
  );
}