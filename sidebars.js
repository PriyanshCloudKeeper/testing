/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  SidebarLens: [
    'lens/intro',
    'lens/topfeatures',
    {
      type: 'category',
      label: 'Billing Summary',
      items: [
        'lens/billingsummary/overview',
        'lens/billingsummary/costinsights',
        'lens/billingsummary/costbreakup',
        'lens/billingsummary/recommendations',
      ],
    },
    {
      type: 'category',
      label: 'Billing Console',
      items: [
        'lens/billingconsole/overview',
        'lens/billingconsole/currentmonth',
        'lens/billingconsole/previousmonth',
        'lens/billingconsole/daily',
      ],
    },
    {
      type: 'category',
      label: 'Account-Wise Breakup',
      items: [
        'lens/accountwisebreakup/overview',
        'lens/accountwisebreakup/currentmonth',
        'lens/accountwisebreakup/previousmonth',
        'lens/accountwisebreakup/daily',
      ],
    },
    {
      type: 'category',
      label: 'Hourly Dashboard',
      items: [
        'lens/hourlydashboard/overview',
        'lens/hourlydashboard/ec2dashboard',
        'lens/hourlydashboard/dtdashboard',
        'lens/hourlydashboard/others',
        'lens/hourlydashboard/savedreports',
      ],
    },
    {
      type: 'category',
      label: 'Cost Analysis',
      items: [
        'lens/costanalysis/overview',
        'lens/costanalysis/costexplorer',
        'lens/costanalysis/savedreports',
      ],
    },
    {
      type: 'category',
      label: 'Cost Breakup',
      items: [
        'lens/costbreakup/overview',
        'lens/costbreakup/dt',
        'lens/costbreakup/cca',
        'lens/costbreakup/nt',
        'lens/costbreakup/others',
      ],
    },
    'lens/reports',
    {
      type: 'category',
      label: 'Reservations',
      items: [
        'lens/reservations/overview',
        'lens/reservations/reservationsummary',
        'lens/reservations/coverage',
        'lens/reservations/utilization',
      ],
    },
    'lens/recommendations',
    {
      type: 'category',
      label: 'Notifications',
      items: [
        'lens/notifications/overview',
        'lens/notifications/notifications',
        'lens/notifications/budgetalerts',
      ],
    },
    'lens/cur',
    {
      type: 'category',
      label: 'Preferences',
      items: [
        'lens/preferences/overview',
        'lens/preferences/users',
        'lens/preferences/mav',
        'lens/preferences/password',
        'lens/preferences/tags',
      ],
    },
  ],

  SidebarTuner: [
    'tuner/intro',
    'tuner/topfeatures',
    {
      type: 'category',
      label: 'Recommendations',
      items: [
        'tuner/recommendations/overview',
      ],
    },
    {
      type: 'category',
      label: 'Scheduler',
      items: [
        'tuner/scheduler/overview',
      ],
    },
    {
      type: 'category',
      label: 'SpotBot',
      items: [
        'tuner/spotbot/overview',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        'tuner/account/overview',
      ],
    },
    {
      type: 'category',
      label: 'Preferences',
      items: [
        'tuner/preferences/overview',
      ],
    },
  ],
};

module.exports = sidebars;
