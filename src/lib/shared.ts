import { i18n } from "./i18n";

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs];

  if (segments.length === 0) {
    segments.push("index.md");
  } else {
    segments[segments.length - 1] += ".md";
  }

  const locale = page.locale ?? i18n.defaultLanguage;

  return { segments, url: `/${locale}/${segments.join("/")}` };
}
