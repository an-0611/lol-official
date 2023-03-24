import { loadLocale } from '@/i18n';
export default async ({ app }) => {
  const { i18n } = app;
  await loadLocale(i18n, process.env.LOCALE);
};
