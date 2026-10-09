import type { ReactNode } from "react";

interface BrowserFrameProps {
  slug?: string;
  children: ReactNode;
}

function slugify(title?: string) {
  if (!title) return "localhost:3000";
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function BrowserFrame({ slug, children }: BrowserFrameProps) {
  const url = slugify(slug);
  return (
    <div className="relative h-full">
      <div className="relative flex h-9 items-center gap-1.5 border-b border-zinc-200/70 bg-zinc-50/90 px-3 dark:border-zinc-800/70 dark:bg-zinc-900/90">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="absolute left-1/2 top-1/2 flex h-5 w-full max-w-[220px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-md bg-zinc-200/70 px-2 text-[10px] font-medium tracking-wide text-zinc-500 dark:bg-zinc-800/70 dark:text-zinc-400">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}