import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    beginDate: z.date(),
    endDate: z.nullable(z.date()),
    skills: z.string().array(),
    highlights: z.string().array().optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    skills: z.string().array(),
    highlights: z.string().array().optional(),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    beginDate: z.date(),
    endDate: z.date(),
    location: z.string(),
    degree: z.string(),
    skills: z.nullable(z.string().array()),
    highlights: z.string().array().optional(),
  }),
});

const certsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certs" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  education: educationCollection,
  certs: certsCollection,
};
