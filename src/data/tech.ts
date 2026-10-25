export type Tone = "primary" | "sage" | "ochre" | "plum";

const tones: Record<string, Tone> = {
  "C#": "primary",
  ".NET": "primary",
  "ASP.NET Core": "primary",
  "EF Core": "primary",
  Java: "primary",
  WinForms: "primary",
  Blazor: "sage",
  TypeScript: "sage",
  JavaScript: "sage",
  React: "sage",
  Astro: "sage",
  "Tailwind CSS": "sage",
  Python: "ochre",
  PyTorch: "ochre",
  "LLM APIs": "ochre",
  "SQL Server": "plum",
  PostgreSQL: "plum",
  Azure: "plum",
  Docker: "plum",
  IoT: "plum",
};

export function toneOf(tech: string): Tone {
  return tones[tech] ?? "plum";
}

const logos: Record<string, string> = {
  Java: "java",
  "C#": "csharp",
  ".NET": "dotnetcore",
  "ASP.NET Core": "dotnetcore",
  "EF Core": "entityframeworkcore",
  WinForms: "windows11",
  Blazor: "blazor",
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  Astro: "astro",
  "Tailwind CSS": "tailwindcss",
  Python: "python",
  PyTorch: "pytorch",
  "SQL Server": "microsoftsqlserver",
  PostgreSQL: "postgresql",
  Azure: "azure",
  Docker: "docker",
};

export function logoOf(tech: string): string | undefined {
  return logos[tech];
}
