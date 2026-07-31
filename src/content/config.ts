import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    beginDate: z.date(),
    endDate: z.nullable(z.date()),
    skills: z.string().array(),
    highlights: z.string().array().optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    skills: z.string().array(),
    highlights: z.string().array().optional(),
  }),
});

const educationCollection = defineCollection({
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
