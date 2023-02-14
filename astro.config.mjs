import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://brazy.one',
  markdown: {
    shikiConfig: { theme: 'dark-plus' },
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    prefetch(),
    robotsTxt(),
    compress({ img: false, svg: false }),
  ],
});
