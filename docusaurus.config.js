// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentație pentru Jurnal Gold",
  tagline: "Continut pentru utilizatorii Jurnal Gold",
  url: "https://admin.jurnalgold.ro",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vladmarginean@softwiz.ro", // Usually your GitHub org/user name.
  projectName: "jg-help-auth", // Usually your repo name.

  i18n: {
    defaultLocale: "ro",
    locales: ["en", "ro"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Jurnal Gold Logo",
          src: "img/jurnalgold-icon-64x64.svg",
        },
        items: [
          {
            to:
              process.env.NODE_ENV === "development"
                ? "http://localhost:8080"
                : "https://admin.jurnalgold.ro/help",
            label: "Documentație",
            position: "left",
            target: "_self",
            className: "navbar-item-help",
          },
          {
            to:
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000"
                : "https://admin.jurnalgold.ro",
            label: "Administrare",
            position: "left",
            target: "_self",
            className: "navbar-item-admin",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Softwiz Creation © ${new Date().getFullYear()} Jurnal Gold Admin Panel (Documentatie).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: ["docusaurus-plugin-dotenv"]
};

module.exports = config;
