// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bbsps19-hash.github.io',
  base: '/koinonia-market',
  adapter: cloudflare(),
});