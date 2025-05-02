import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdoc from "@astrojs/markdoc";
import remarkCodeTitles from 'remark-code-titles';
import vercel from '@astrojs/vercel/serverless';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  output: 'hybrid',
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
    ssr: {
      noExternal: [
        'lightgallery',
        'lightgallery/plugins/thumbnail',
        'lightgallery/plugins/zoom',
        'lightgallery/plugins/video'
      ]
    },
  },
});
