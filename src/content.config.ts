// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Blog collection schema
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    role: z.string().optional(),
    authorImage: image(),
    authorImageAlt: z.string(),
    pubDate: z.date(),
    cardImage: image(),
    cardImageAlt: z.string(),
    readTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Insights collection schema
const insightsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cardImage: image(),
    cardImageAlt: z.string(),
    pubDate: z.date().optional(),
  }),
});

// Products collection schema
const productsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(z.object({
      id: z.string(),
      dataTab: z.string(),
      title: z.string(),
    })).optional(),
    longDescription: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }).optional(),
    descriptionList: z.array(z.object({
      title: z.string(),
      subTitle: z.string(),
    })).optional(),
    specificationsLeft: z.array(z.object({
      title: z.string(),
      subTitle: z.string(),
    })).optional(),
    specificationsRight: z.array(z.object({
      title: z.string(),
      subTitle: z.string(),
    })).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
    }).optional(),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: blogCollection,
  insights: insightsCollection,
  products: productsCollection,
};
