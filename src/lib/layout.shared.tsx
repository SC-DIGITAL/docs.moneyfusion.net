import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(_locale: string): BaseLayoutProps {
  return {
    i18n,
    githubUrl: "https://github.com/sc-digital",
    nav: {
      title: <>FusionPay</>,
    },
    links: [],
  };
}
