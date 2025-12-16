import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <DocsLayout
      {...baseOptions(lang)}
      tree={source.getPageTree(lang)}
      tabMode="navbar"
      nav={{ ...baseOptions(lang).nav, mode: "top", }}
    >
      {children}
    </DocsLayout>
  );
}
