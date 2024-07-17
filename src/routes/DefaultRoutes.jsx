import DefaultLayout from 'layout/DefaultLayout';

import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
 const Home = Loadable(lazy(() => import('views/pages/home/Home')));


const DefaultRoutes = {
  path: '/',
  element:<DefaultLayout/>,
  children: [

    {
      path:'/home',
      element: <Home />
    }
  ]
};

export default DefaultRoutes;
