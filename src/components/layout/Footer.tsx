"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

const navigateLinks = [
  { label: "About me", href: "/#about" },
  { label: "Tech stack", href: "/#tech-stack" },
  { label: "Projects", href: "/#select-project" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Ahlasakdailuktnam",
    label: "GitHub",
    hoverColor: "hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/yourusername",
    label: "Facebook",
    hoverColor: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: FaTelegram,
    href: "https://t.me/yourusername",
    label: "Telegram",
    hoverColor: "hover:bg-sky-500 hover:text-white",
  },
  {
    icon: Mail,
    href: "mailto:landphalll@gmail.com",
    label: "Email",
    hoverColor: "hover:bg-indigo-500 hover:text-white",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mt-8 border-t border-zinc-200/70 bg-white/40 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-950/40">
      <div className="site-container py-10 sm:py-12">
        {/* Top */}
        <div
          data-reveal
          className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="relative size-11 overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  src="/name.png"
                  alt="Lanh Phalla logo"
                  fill
                  sizes="44px"
                  className="object-contain p-1.5"
                />
              </span>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                Lanh Phalla
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Full Stack Developer crafting modern, responsive and scalable web
              applications.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex size-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/60 text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 ${social.hoverColor}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <span className="h-px w-0 bg-indigo-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:landphalll@gmail.com"
                  className="group flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white/60 text-zinc-500 transition-colors group-hover:border-indigo-300 group-hover:text-indigo-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
                    <Mail size={15} />
                  </span>
                  landphalll@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white/60 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
                  <MapPin size={15} />
                </span>
                Phnom Penh, Cambodia
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div data-reveal className="pointer-events-none mt-8 select-none overflow-hidden">
          <p className="bg-gradient-to-b from-zinc-200 to-zinc-100 bg-clip-text text-center text-[12vw] font-black leading-none tracking-tighter text-transparent sm:text-[10vw] lg:text-[6.5rem] dark:from-zinc-800 dark:to-zinc-900">
            LANH PHALLA
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/70 pt-4 sm:flex-row dark:border-zinc-800/70">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © {year} Lanh Phalla. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Built with Next.js &amp; Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-4 py-2 text-xs font-semibold text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
