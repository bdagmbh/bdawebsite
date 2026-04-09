import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bda-baudesign-akustik.de',
  compressHTML: true,
  build: {
    format: 'file'
  },
  devToolbar: {
    enabled: false
  }
});
