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

// One Markdown file per drama. The body of the file is your full review.
// A poster can be a local file in src/content/kdramas/posters/ (poster: ./posters/my-drama.jpg)
// or a link to a poster hosted elsewhere (posterUrl). A local file wins when both are set.
// Without either, or when the link fails to load, a sketch placeholder is shown.
// posterEn is an optional English-title poster, shown when the visitor picks English posters.
const kdramas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/kdramas" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      koreanTitle: z.string().optional(),
      // First air date for a series, release date for a movie. The list is sorted by this by default.
      released: z.coerce.date(),
      type: z.enum(["series", "movie"]),
      episodes: z.number().int().optional(),
      poster: image().optional(),
      posterEn: image().optional(),
      posterUrl: z.string().url().optional(),
      // Out of 10, halves allowed (e.g. 8.5). Leave out until you've rated it.
      rating: z.number().min(0).max(10).multipleOf(0.5).optional(),
      // One-line take shown on the card.
      verdict: z.string().optional(),
      airing: z.boolean().default(false),
      genres: z.array(z.string()).default([]),
      watched: z.coerce.date().optional(),
      favorite: z.boolean().default(false),
    }),
});

export const collections = { projects, blog, kdramas };
