import { LogoItem } from "@/components/ui/LogoLoop";
import { TechItem, getAllTechnologies } from "@/data/techStack";

export const convertTechToLogoItems = (technologies: TechItem[]): LogoItem[] => {
  return technologies.map((tech) => ({
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 dark:bg-zinc-800/30 border border-zinc-200/30 dark:border-zinc-700/30 hover:border-zinc-300/60 dark:hover:border-zinc-600/50 transition-all duration-300 hover:shadow-md hover:scale-105">
        <span
          className="text-2xl flex-shrink-0 transition-transform duration-300"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </span>
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
          {tech.name}
        </span>
      </div>
    ),
    title: tech.name,
    ariaLabel: tech.name,
  }));
};

// You can also create different variants for different use cases
export const convertTechToSimpleLogoItems = (technologies: TechItem[]): LogoItem[] => {
  return technologies.map((tech) => ({
    node: (
      <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
        <span className="text-3xl" style={{ color: tech.color }}>
          {tech.icon}
        </span>
        <span className="text-sm font-medium">{tech.name}</span>
      </div>
    ),
    title: tech.name,
  }));
};

export const convertTechToIconOnlyLogoItems = (technologies: TechItem[]): LogoItem[] => {
  return technologies.map((tech) => ({
    node: (
      <div className="p-3 rounded-full hover:scale-110 transition-transform">
        <span className="text-4xl" style={{ color: tech.color }}>
          {tech.icon}
        </span>
      </div>
    ),
    title: tech.name,
  }));
};