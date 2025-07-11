// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lens',
  tagline: 'All your costing information in one place',
  favicon: 'img/favicon.ico',

  url: 'https://your-sentinel-docs-site.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-username/sentinel-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // Remove logo block below if you don’t want a logo
        // logo: {
        //   alt: 'Sentinel Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/',
            label: 'Lens',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['yaml', 'python'],
      },
    }),
};

module.exports = config;
