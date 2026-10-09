// src/data/capabilities.ts
import { Code2, Server, Database, type LucideIcon } from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[]; // ← add this line
};

export const capabilitiesData: Capability[] = [
  {
    title: "Frontend",
    description: "Clean, responsive interfaces with React, Next.js and Tailwind.",
    icon: Code2,
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend",
    description: "Reliable services and APIs with Laravel, Node.js and PHP.",
    icon: Server,
    tags: ["Node.js", "Express", "Laravel", "REST APIs"],
  },
  {
    title: "Data",
    description: "Thoughtful database structure that stays maintainable.",
    icon: Database,
    tags: ["SQL", "PostgreSQL", "Supabase"],
  },
];