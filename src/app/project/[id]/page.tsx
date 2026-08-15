// app/project/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  GitBranch, 
  Calendar, 
  User, 
  Clock, 
  Building2,
  Code2,
  AlertCircle,
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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const displayImage = project.modalImage || project.image;
  const hasGallery = project.images && project.images.length > 1;
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasSolutions = project.solutions && project.solutions.length > 0;

  return (
    <PageLayout>
      <article className="site-container py-24 md:py-32">
        {/* Back button */}
        <Link
          href="/project"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            {project.featured && (
              <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200">
                Featured project
              </span>
            )}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>

            {/* Project Metadata */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.role && (
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <User size={16} className="shrink-0" />
                  <span>{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Clock size={16} className="shrink-0" />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Calendar size={16} className="shrink-0" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Building2 size={16} className="shrink-0" />
                  <span>{project.team}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Building2 size={16} className="shrink-0" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Technologies
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.liveUrl || project.sourceUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
                  >
                    Live demo <ExternalLink size={15} />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Source code <GitBranch size={15} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 shadow-xl shadow-zinc-900/5 dark:border-zinc-700/70 dark:bg-zinc-900/60">
            <Image
              src={displayImage}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </header>

        {/* Gallery Section */}
        {hasGallery && (
          <section className="mt-16">
            <ProjectGallery images={project.images!} title={project.title} />
          </section>
        )}

        {/* Long Description */}
        {project.longDescription && (
          <section className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              About the Project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.longDescription}
            </p>
          </section>
        )}

        {/* Challenges & Solutions */}
        {(hasChallenges || hasSolutions) && (
          <section className="mt-16 grid gap-8 md:grid-cols-2">
            {hasChallenges && (
              <div className="rounded-2xl border border-red-200/50 bg-red-50/30 p-6 dark:border-red-800/30 dark:bg-red-900/10">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertCircle size={20} />
                  <h3 className="text-lg font-semibold">Challenges</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {project.challenges!.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasSolutions && (
              <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/30 p-6 dark:border-emerald-800/30 dark:bg-emerald-900/10">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Lightbulb size={20} />
                  <h3 className="text-lg font-semibold">Solutions</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {project.solutions!.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section className="mt-16 max-w-3xl border-t border-zinc-200/70 pt-10 dark:border-zinc-700/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Highlights
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              What this project includes
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-zinc-200/70 bg-white/60 p-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-700/70 dark:bg-zinc-800/50 dark:text-zinc-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </PageLayout>
  );
}