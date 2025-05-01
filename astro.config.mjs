import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import remarkCodeTitles from 'remark-code-titles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  output: 'static',
  outDir: 'dist',
  prerender: { onError: 'continue', entries: ['*', '!/api/*'] },
  // site: 'https://astro-ink.vercel.app',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [remarkCodeTitles],
  },
  integrations: [
    mdx(),
    markdoc(),
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: { $: path.resolve(__dirname, './src') },
    },
    optimizeDeps: { allowNodeBuiltins: true },
  },
});
