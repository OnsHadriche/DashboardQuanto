// assets
import { IconFileDescription, IconSettings } from '@tabler/icons-react';

// constant
const icons = { IconSettings,IconFileDescription };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const settings = {
  id: 'settings',
  title: 'Setup',
  type: 'group',
  children: [
    {
      id: 'brokerDetails',
      title: 'Broker',
      type: 'item',
      url: '/settings/brokerDetails',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    },
    {
      id: 'Settings',
      title: ' Profile',
      type: 'item',
      url: '/settings/setting',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default settings;
