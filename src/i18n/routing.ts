import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'tr'],      // Desteklenen diller
  defaultLocale: 'tr'         // Varsayılan dil
});
