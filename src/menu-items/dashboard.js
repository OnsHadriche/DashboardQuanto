// assets
import { IconDashboard, IconChartHistogram } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconChartHistogram };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'myPortfolio',
      title: 'MyPortfolio',
      type: 'item',
      url: '/dashboard/myPortfolio',
      icon: icons.IconChartHistogram,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
