// Content collections: typed folders of Markdown files. The schema works like
// a C# model with validation; a file with a missing or wrong field fails the build.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    // Lower numbers are listed first.
    order: z.number().default(100),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Drafts are never published. The blog stays hidden until a post is not a draft.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
