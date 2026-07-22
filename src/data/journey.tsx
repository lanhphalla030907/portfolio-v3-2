import { Code2, Rocket, Layers3, ServerCog } from "lucide-react";

export interface JourneyStep {
  step: string;
  title: string;
  detail: string;
  icon: React.ElementType;
}

export const journeyData: JourneyStep[] = [
  {
    step: "01",
    title: "Learning the fundamentals",
    detail:
      "Started with programming logic, consistent practice, and the curiosity to understand how things work.",
    icon: Code2,
  },
  {
    step: "02",
    title: "Building first projects",
    detail:
      "Turned small ideas into working products and learned through every iteration.",
    icon: Rocket,
  },
  {
    step: "03",
    title: "Growing as a frontend developer",
    detail:
      "Focused on React, Next.js, responsive design, and creating interfaces people enjoy using.",
    icon: Layers3,
  },
  {
    step: "04",
    title: "Becoming full stack",
    detail:
      "Connected great interfaces to APIs, databases, Laravel, and practical systems thinking.",
    icon: ServerCog,
  },
];