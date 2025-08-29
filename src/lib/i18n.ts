import { defineI18n } from "fumadocs-core/i18n";

export const i18n = defineI18n({
  defaultLanguage: "fr",
  fallbackLanguage: "fr",
  languages: ["fr", "en"],
  parser: "dir",
});
