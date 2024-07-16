// assets
import { IconKey, IconBasket } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconBasket
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'MarketPlace',
  type: 'group',
  children: [
    {
      id: 'marketPlace',
      title: 'MarketPlace',
      type: 'item',
      url: '/pages/marketPlace',
      icon: icons.IconBasket,
      breadcrumbs: false
    }
    // {
    //   id: 'authentication',
    //   title: 'Authentication',
    //   type: 'collapse',
    //   icon: icons.IconKey,

    //   children: [

    //     {
    //       id: 'login3',
    //       title: 'Login',
    //       type: 'item',
    //       url: '/pages/login/login3',
    //       target: true
    //     },
    //     {
    //       id: 'register3',
    //       title: 'Register',
    //       type: 'item',
    //       url: '/pages/register/register3',
    //       target: true
    //     }
    //   ]
    // }
  ]
};

export default pages;
