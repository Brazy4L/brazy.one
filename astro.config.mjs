import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://brazy.one',
  integrations: [mdx(), sitemap(), tailwind(), partytown(), prefetch()],
});
