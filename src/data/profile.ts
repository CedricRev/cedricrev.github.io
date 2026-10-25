import type { Tone } from "./tech";

export const profile = {
  name: "Cedric Revestir",
  role: "AI & Full-stack Engineer",
  location: "Philippines",
  intro:
    "Software engineer building full-stack apps with .NET and TypeScript, and AI systems with Python. Based in the Philippines and open to local and remote AI engineering roles.",
  links: {
    github: "https://github.com/CedricRev",
    linkedin: "https://www.linkedin.com/in/cedricrevestir",
  },
  cvPdf: null as string | null,
};

export interface Job {
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  tech: string[];
}

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "MinebeaMitsumi (Danao Factory)",
    start: "Sep 2025",
    end: "Present",
    summary:
      "Build and maintain internal factory software: web apps with ASP.NET and Blazor, desktop tools in WinForms, and IoT integrations on the production floor.",
    tech: ["ASP.NET Core", "Blazor", "WinForms", "IoT"],
  },
  {
    role: "Freelance Developer",
    company: "Fiverr",
    start: "",
    end: "",
    summary: "Built custom Minecraft server plugins in Java for clients.",
    tech: ["Java"],
  },
];

export interface SkillGroup {
  name: string;
  tone: Tone;
  items: string[];
}

export const skills: SkillGroup[] = [
  { name: "backend", tone: "primary", items: ["C#", "ASP.NET Core", "EF Core", "SQL Server"] },
  { name: "frontend", tone: "sage", items: ["Blazor", "TypeScript", "Astro", "Tailwind CSS"] },
  { name: "ai / ml", tone: "ochre", items: ["Python", "PyTorch", "LLM APIs"] },
];

export interface School {
  degree: string;
  school: string;
}

export const education: School[] = [
  {
    degree: "BS Computer Engineering",
    school: "Mindanao State University – Iligan Institute of Technology",
  },
];
