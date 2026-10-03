import { buttonVariants } from "fumadocs-ui/components/ui/button";
import {
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Bot } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageMarkdownUrl } from "@/lib/shared";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: PageProps<"/[lang]/[[...slug]]">) {
  const params = await props.params;

  const { slug, lang } = params;

  const page = source.getPage(slug, lang);

  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "normal",
      }}
    >
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/SC-DIGITAL/docs.moneyfusion.net/blob/main/content/docs/${page.path}`}
        />
        <a
          href="/llms.txt"
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className:
              "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground",
          })}
        >
          <Bot />
          llms.txt
        </a>
      </div>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[[...slug]]">): Promise<Metadata> {
  const { slug = [], lang } = await params;

  const page = source.getPage(slug, lang);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
    twitter: {
      card: "summary_large_image",
      images: getPageImage(page).url,
    },
  };
}
