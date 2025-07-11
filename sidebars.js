/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Billing Summary',
      items: ['billingsummary/overview'],
    },
    {
      type: 'category',
      label: 'Billing Console',
      items: ['billingconsole/overview'],
    },
    {
      type: 'category',
      label: 'Account-Wise Breakup',
      items: ['accountwisebreakup/overview'],
    },
    {
      type: 'category',
      label: 'Hourly Dashboard',
      items: ['hourlydashboard/overview'],
    },
    {
      type: 'category',
      label: 'Cost Analysis',
      items: ['costanalysis/overview'],
    },
    {
      type: 'category',
      label: 'Cost Breakup',
      items: ['costbreakup/overview'],
    },
    {
      type: 'category',
      label: 'Reports',
      items: ['reports/overview'],
    },
    {
      type: 'category',
      label: 'Reservations',
      items: ['reservations/overview'],
    },
    {
      type: 'category',
      label: 'Recommendations',
      items: ['recommendations/overview'],
    },
    {
      type: 'category',
      label: 'Notifications',
      items: ['notifications/overview'],
    },
    {
      type: 'category',
      label: 'Cost and Usage Reports',
      items: ['costandusagereports/overview'],
    },
    {
      type: 'category',
      label: 'Preferences',
      items: ['preferences/overview'],
    },
  ]
};

module.exports = sidebars;
