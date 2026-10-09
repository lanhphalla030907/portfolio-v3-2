// app/project/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

const getProject = (id: string) => projects.find((project) => project.id === id);

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Lanh Phalla`,
    description: project.description,
  };
}

const slugify = (title?: string) =>
  (title ?? "portfolio")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) notFound();

  const hasGallery = project.images && project.images.length > 1;
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasSolutions = project.solutions && project.solutions.length > 0;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const slug = slugify(project.title);
  const eyebrow = [
    project.featured ? "FEATURED" : "SELECTED",
    project.technologies?.[0] ?? project.tags[0],
    project.year,
  ]
    .filter(Boolean)
    .join(" · ");

  const metaItems = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Year", value: project.year },
    { label: "Team", value: project.team },
  ].filter((item) => item.value);

  const hasLiveUrl = !!project.liveUrl && project.liveUrl !== "#";
  const hasSourceUrl = !!project.sourceUrl && project.sourceUrl !== "#";

  return (
    <PageLayout>
      <article className="text-zinc-900 dark:text-zinc-100 min-h-screen pb-24">
        
        {/* Navigation & Header Space */}
        <div className="site-container pt-32 md:pt-40 overflow-hidden">
          <nav className="mb-12 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <Link
              href="/project"
              className="group inline-flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              Portfolio
            </Link>
            <span className="hidden sm:block">Lanh Phalla</span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              Project · {slug}
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal-500"
                  aria-label="Open live site"
                >
                  <ArrowUpRight size={14} />
                </a>
              )}
            </span>
          </nav>

          {/* ===== HERO: Text LEFT, Image RIGHT ===== */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full min-w-0">

            {/* LEFT — Text Content */}
            <div className="w-full md:w-1/2 min-w-0 flex flex-col justify-center items-start order-1">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                — {eyebrow}
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white mt-4 break-words">
                {project.title}
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {(project.technologies && project.technologies.length > 0
                  ? project.technologies
                  : project.tags
                ).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-3 py-1 font-mono text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status Badge / Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {hasLiveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 font-mono text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    Live preview
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-zinc-200/60 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Private project
                  </span>
                )}
                {hasSourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-200/80 bg-zinc-100/80 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200/80 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    Source code
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT — Image (constrained width) */}
            <div className="w-full md:w-1/2 min-w-0 order-2">
              <div
                className="relative w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800"
                style={{ aspectRatio: "16 / 10" }}
              >
                <Image
                  src={project.image || "/project/jobportal.png"}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* ===== END HERO ===== */}

          {/* Metrics Grid Below Hero */}
          {metaItems.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {metaItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="site-container flex flex-col gap-12 lg:gap-16">
          <div className="h-px w-full bg-zinc-200/60 dark:bg-zinc-800/60 my-8"></div>

          {/* Overview */}
          {project.longDescription && (
            <section className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
                About the project
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* Highlights */}
          {project.features && project.features.length > 0 && (
            <section className="max-w-3xl mt-8">
              <h2 className="text-4xl font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
                What this project includes
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200/70 bg-white/60 p-4 text-sm leading-relaxed text-zinc-700 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-900/50 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges & Solutions */}
          {(hasChallenges || hasSolutions) && (
            <section className="mt-8">
              <h2 className="text-4xl font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
                Challenges <span className="text-zinc-300 dark:text-zinc-700">&</span> Solutions
              </h2>

              <div
                className={`mt-8 grid gap-6 ${
                  hasChallenges && hasSolutions ? "md:grid-cols-2" : ""
                }`}
              >
                {hasChallenges && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-900/50">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-rose-500/10 blur-3xl"
                    />

                    <div className="relative mb-6 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 ring-1 ring-inset ring-rose-500/20">
                          <AlertCircle size={18} />
                        </span>
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                            Challenges
                          </h3>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                            Problems encountered
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-rose-200/80 bg-rose-50/70 px-2.5 py-1 font-mono text-[11px] font-medium text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300">
                        {String(project.challenges!.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative">
                      <span
                        aria-hidden
                        className="absolute bottom-6 left-[5px] top-2 w-px bg-gradient-to-b from-rose-300 via-rose-200 to-transparent dark:from-rose-500/60 dark:via-rose-500/25"
                      />
                      <ul className="space-y-4">
                        {project.challenges!.map((challenge, index) => (
                          <li
                            key={index}
                            className="relative pl-8 text-sm leading-relaxed text-zinc-600 transition-colors dark:text-zinc-400"
                          >
                            <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-rose-500 ring-4 ring-rose-500/10" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {hasSolutions && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-900/50">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-emerald-500/10 blur-3xl"
                    />

                    <div className="relative mb-6 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400">
                          <Lightbulb size={18} />
                        </span>
                        <div>
                          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                            Solutions
                          </h3>
                          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                            How it was solved
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                        {String(project.solutions!.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative">
                      <span
                        aria-hidden
                        className="absolute bottom-6 left-[5px] top-2 w-px bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent dark:from-emerald-500/60 dark:via-emerald-500/25"
                      />
                      <ul className="space-y-4">
                        {project.solutions!.map((solution, index) => (
                          <li
                            key={index}
                            className="relative pl-8 text-sm leading-relaxed text-zinc-600 transition-colors dark:text-zinc-400"
                          >
                            <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Gallery */}
          {hasGallery && (
            <section className="mt-8">
              <h2 className="mb-8 text-4xl font-black tracking-tighter leading-[0.9] text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
                Project Screenshots
              </h2>
              <ProjectGallery images={project.images!} title={project.title} />
            </section>
          )}

          {/* Next project */}
          <nav className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <Link
                href="/project"
                className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                All projects
              </Link>
              <Link
                href={`/project/${nextProject.id}`}
                className="group inline-flex items-center gap-4 rounded-xl border border-zinc-200/70 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal-500 hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/50"
              >
                <div className="text-right">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Next project
                  </p>
                  <p className="mt-1 font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-teal-500 dark:text-zinc-100">
                    {nextProject.title}
                  </p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white transition-colors group-hover:bg-teal-600 dark:bg-white dark:text-zinc-950">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </article>
    </PageLayout>
  );
}