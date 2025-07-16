/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Sidebar: [
    'intro',
    'topfeatures',
    {
      type: 'category',
      label: 'Billing Summary',
      items: ['billingsummary/overview', 'billingsummary/costinsights', 'billingsummary/costbreakup', 'billingsummary/recommendations'],
    },
    {
      type: 'category',
      label: 'Billing Console',
      items: ['billingconsole/overview', 'billingconsole/currentmonth', 'billingconsole/previousmonth', 'billingconsole/daily']
    },
    {
      type: 'category',
      label: 'Account-Wise Breakup',
      items: ['accountwisebreakup/overview', 'accountwisebreakup/currentmonth', 'accountwisebreakup/previousmonth', 'accountwisebreakup/daily'],
    },
    {
      type: 'category',
      label: 'Hourly Dashboard',
      items: ['hourlydashboard/overview', 'hourlydashboard/ec2dashboard', 'hourlydashboard/dtdashboard', 'hourlydashboard/others', 'hourlydashboard/savedreports'],
    },
    {
      type: 'category',
      label: 'Cost Analysis',
      items: ['costanalysis/overview', 'costanalysis/costexplorer', 'costanalysis/savedreports'],
    },
    {
      type: 'category',
      label: 'Cost Breakup',
      items: ['costbreakup/overview', 'costbreakup/dt', 'costbreakup/cca'],
    },
    'reports',
    { 
      type: 'category',
      label: 'Reservations',
      items: ['reservations/overview', 'reservations/reservationsummary', 'reservations/coverage', 'reservations/utilization'],
    },
    'recommendations',
    {
      type: 'category',
      label: 'Notifications',
      items: ['notifications/overview', 'notifications/notifications', 'notifications/budgetalerts'],
    },
    'cur',
    {
      type: 'category',
      label: 'Preferences',
      items: ['preferences/overview','preferences/users', 'preferences/mav', 'preferences/password', 'preferences/tags'],
    },
  ]
};

module.exports = sidebars;
