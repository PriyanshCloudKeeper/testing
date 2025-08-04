const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'Docs',
  tagline: 'All your costing information in one place',
  favicon: 'img/ck-favicon.png',

  url: 'https://your-cloudkeeper-docs-site.com',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Cloudkeeper Lens Logo',
        src: 'img/CloudKeeper_Logo-removebg-preview.png',
        href: '/',
      },
      items: [
        {
          to: '/lens',
          label: 'Lens',
          position: 'left',
        },
        {
          to: '/tuner',
          label: 'Tuner',
          position: 'left',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['yaml', 'python'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',

      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      contextualSearch: true,

      searchPagePath: 'search',
    },
  },
};

module.exports = config;