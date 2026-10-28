import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
