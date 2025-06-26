import { DefaultTheme, defineConfig } from "islandjs";

export default defineConfig({
  lang: "fr",
  title: "Fusionpay - la documentation api pour les développeurs",
  description:
    "Simplifiez le traitement de vos paiements avec l'integration de Fusion Pay dans votre site e-commerce et/ou votre application mobile",
  icon: "/logo.png",
  vite: {
    plugins: [],
  },
  markdown: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
  themeConfig: {
    siteTitle: "Fusionpay Doc",
    //internalization
    locales: {
      "/en/": {
        label: "English",
        lang: "en",
        prevPageText: "Previous Page",
        nextPageText: "Next Page",
        lastUpdatedText: "Last Updated",
        editLinkText: "Edit this page on GitHub",
        outlineTitle: "ON THIS PAGE",
        nav: getNavbar("en"),
        sidebar: getSidebar("en"),
      },
      "/fr/": {
        label: "Français",
        lang: "fr",
        prevPageText: "Page précédente",
        nextPageText: "Page suivante",
        lastUpdatedText: "Dernière mise à jour",
        editLinkText: "Modifier cette page sur GitHub",
        outlineTitle: "SUR CETTE PAGE",
        nav: getNavbar("fr"),
        sidebar: getSidebar("fr"),
      },
    },

    //edit
    editLink: {
      text: "Edit this page on GitHub",
      pattern:
        "https://github.com/Yaya12085/docs.moneyfusion.net/tree/main/docs/:path",
    },
    markdown: {
      lineNumbers: true,
    },
  },
});

function getI18nHelper(lang: "en" | "fr") {
  const en = lang === "en";
  const prefix = en ? "/en" : "/fr";
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (enText: string, frText: string) => (en ? enText : frText);
  return { getText, getLink };
}

function getSidebar(lang: "fr" | "en"): DefaultTheme.Sidebar {
  const { getLink, getText } = getI18nHelper(lang);

  return {
    [getLink("")]: [
      {
        text: getText("Getting Started", "Introduction"),
        items: [
          {
            text: getText("Good to know", "Bon à savoir"),
            link: getLink("/"),
          },
        ],
      },
          {
              text: getText("Doc", "Doc"),
              items: [
                  {
                      text: getText("Web api", "Web api"),
                      link: getLink("/webapi"),
                  },
                  {
                      text: getText("Nodejs / npm", "Nodejs / npm"),
                      link: getLink("/nodejs"),
                  },
                  {
                      text: getText("Wordpress", "Wordpress"),
                      link: getLink("/wordpress"),
                  },
                  {
                      text: getText("Python", "Python"),
                      link: getLink("/python"),
                  },
                  {
                      text: getText("C# / .NET", "C# / .NET"),
                      link: getLink("/dotnet"),
                  },
              ],
          },
    ],
  };
}

function getNavbar(lang: "en" | "fr") {
  const { getLink, getText } = getI18nHelper(lang);

  return [
    {
      text: getText("Home", "Accueil"),
      link: getLink("/"),
      activeMatch: "/",
    },
    {
      text: getText("About", "En savoir plus"),
      link: `https://moneyfusion.net`,
    },
  ];
}
