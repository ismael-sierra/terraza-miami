// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://terraza-miami.vercel.app/',
  integrations: [sitemap()],

  // La antigua URL con "ñ" redirige a la nueva para no romper enlaces ya compartidos.
  redirects: {
    '/reseñas': '/resenas',
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Josefin Sans',
      cssVariable: '--font-titulos',
      weights: [600, 700],
      subsets: ['latin'],
      fallbacks: ['Arial', 'sans-serif'],
    },
  ],
});
