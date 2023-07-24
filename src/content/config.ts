import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    beginDate: z.date(),
    endDate: z.date(),
  }),
});

export const collections = {
  experience: experienceCollection,
};
