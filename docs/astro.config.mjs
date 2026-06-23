import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

const isStaticBuild = process.env.npm_lifecycle_event === 'build';

export default defineConfig({
  site: 'https://rixabhh.github.io',
  base: '/rixabhh',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    !isStaticBuild && keystatic(),
  ].filter(Boolean),
  transitions: true,
});
