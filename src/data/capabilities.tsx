import { Braces, ServerCog, Database, type LucideIcon } from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilitiesData: Capability[] = [
  {
    title: "Frontend",
    description:
      "Clean, responsive interfaces with React, Next.js, and Tailwind CSS.",
    icon: Braces,
  },
  {
    title: "Backend",
    description: "Reliable services and APIs with Laravel, Node.js, and PHP.",
    icon: ServerCog,
  },
  {
    title: "Data",
    description:
      "Thoughtful database structure for features that stay maintainable.",
    icon: Database,
  },
];