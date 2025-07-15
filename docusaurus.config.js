const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'Lens',
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
          editUrl: 'https://github.com/your-username/sentinel-docs/tree/main/',
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
      title: 'Lens',
      logo: {
        alt: 'Cloudkeeper Lens Logo',
        src: 'img/CloudKeeper_Logo-removebg-preview.png',
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/topfeatures',
          label: 'Top Offerings',
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
  },
};

module.exports = config;
