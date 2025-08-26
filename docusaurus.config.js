// docusaurus.config.js

const dotenv = require('dotenv');
dotenv.config();

const enableTuner = process.env.ENABLE_TUNER === 'true';

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
  i18n: { defaultLocale: 'en', locales: ['en'] },

  // ❷ Expose to the client
  customFields: {
    enableTuner,
  },

  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
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
      { to: '/lens', label: 'Lens', position: 'right' },
      { to: enableTuner ? '/tuner' : '/coming-soon', label: 'Tuner', position: 'right' },
    ],
  },
  docs: { sidebar: { hideable: true } },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
    additionalLanguages: ['yaml', 'python'],
  },

  colorMode: {
    disableSwitch: true,
    defaultMode: 'light',
  },
},
  // themeConfig: {
  //   navbar: {
  //     title: 'Home',
  //     logo: {
  //       alt: 'Cloudkeeper Lens Logo',
  //       src: 'img/CloudKeeper_Logo-removebg-preview.png',
  //       href: '/',
  //     },
  //     items: [
  //       { to: '/lens', label: 'Lens', position: 'left' },
  //       // ❸ Navbar item obeys the flag
  //       { to: enableTuner ? '/tuner' : '/coming-soon', label: 'Tuner', position: 'left' },
  //     ],
  //   },
  //   docs: { sidebar: { hideable: true } },
  //   prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme, additionalLanguages: ['yaml', 'python'] },
  // },
};

module.exports = config;
