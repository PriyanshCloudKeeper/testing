const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'Lens', // Website Title
  tagline: 'All your costing information in one place', // Website Tagline
  favicon: 'img/ck-favicon.png', // Favicon for the site

  url: 'https://your-cloudkeeper-docs-site.com', // Base URL for your site (adjust accordingly)
  baseUrl: '/', // The base path for the site

  onBrokenLinks: 'throw', // Behavior when links are broken
  onBrokenMarkdownLinks: 'warn', // Behavior for broken markdown links

  i18n: {
    defaultLocale: 'en', // Default language
    locales: ['en'], // Supported locales
  },

  presets: [
    [
      'classic', // Classic preset to get started quickly with docs and blog
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Path to your sidebars file
          editUrl: 'https://github.com/your-username/sentinel-docs/tree/main/', // URL to edit docs
        },
        blog: false, // Disable the blog section if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Custom CSS for the site
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Lens', // Title for the navbar
      logo: {
        alt: 'Cloudkeeper Lens Logo', // Logo alt text
        src: 'img/CloudKeeper_Logo-removebg-preview.png', // Path to logo image
        href: '/', // Link to homepage when logo is clicked
      },
      items: [
        {
          type: 'docSidebar', // Sidebar for docs
          sidebarId: 'Sidebar', // ID for the sidebar
          position: 'left', // Position of the sidebar link
          label: 'Documentation', // Label text for the sidebar link
        },
      ],
    },

    prism: {
      theme: lightCodeTheme, // Light theme for code blocks
      darkTheme: darkCodeTheme, // Dark theme for code blocks
      additionalLanguages: ['yaml', 'python'], // Additional languages for syntax highlighting
    },
  },
};

module.exports = config;
