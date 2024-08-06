// assets
import { IconSettings,IconFileDescription } from '@tabler/icons-react';

// constant
const icons = { IconSettings,IconFileDescription };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const settings = {
  id: 'settings',
  title: 'Setup',
  type: 'group',
  children: [
    {
      id: 'brokingDetails',
      title: 'Broking Details',
      type: 'item',
      url: '/settings/brokingDetails',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    },
    {
      id: 'Settings',
      title: 'Settings',
      type: 'item',
      url: '/settings/setting',
      icon: icons.IconSettings,
      breadcrumbs: false
    }
  ]
};

export default settings;
