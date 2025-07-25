import { generateOGImage } from "fumadocs-ui/og";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string; slug: string[] }> }
) {
  const { slug, lang } = await params;
  const page = source.getPage(slug.slice(0, -1), lang);
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: "FusionPay",
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, "image.png"],
  }));
}
