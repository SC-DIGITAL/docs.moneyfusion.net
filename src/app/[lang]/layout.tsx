import "@/app/global.css";
import { Translations } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

// translations
const fr: Partial<Translations> = {
  search: "Rechercher",
};

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Français",
    locale: "fr",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(`https://docs.moneyfusion.net`),
  title: {
    default: "Fusionpay - la documentation api pour les développeurs",
    template: `%s - FusionPay`,
  },
  description:
    "Simplifiez le traitement de vos paiements avec l'integration de Fusion Pay dans votre site e-commerce et/ou votre application mobile",
  authors: [
    {
      name: "moneyfusion",
      url: "https://docs.moneyfusion.net",
    },
  ],
  creator: "moneyfusion",
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Fusionpay - la documentation api pour les développeurs",
    description:
      "Simplifiez le traitement de vos paiements avec l'integration de Fusion Pay dans votre site e-commerce et/ou votre application mobile",
    url: "https://docs.moneyfusion.net",
    siteName: "Fusionpay - la documentation api pour les développeurs",
    images: [{ url: "/hero.png" }],
    locale: "fr_CI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@conhouinnovationgroup",
    images: [{ url: "/hero.png" }],
    description:
      "Simplifiez le traitement de vos paiements avec l'integration de Fusion Pay dans votre site e-commerce et/ou votre application mobile",
    title: "Fusionpay - la documentation api pour les développeurs",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": 0,
    "max-snippet": 150,
  },
  keywords: [""],
};

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { fr }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
