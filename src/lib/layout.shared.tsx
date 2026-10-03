import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(_locale: string): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/sc-digital",
    nav: {
      transparentMode: "none",
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={40} height={40} />
          <span>FusionPay</span>
        </div>
      ),
    },
    links: [],
  };
}
