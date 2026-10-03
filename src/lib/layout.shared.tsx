import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(_locale: string): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/sc-digital",
    nav: {
      transparentMode: "none",
      title: "FusionPay",
    },
    links: [],
  };
}
