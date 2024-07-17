import { lazy } from 'react';


import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const MyPortfolio = Loadable(lazy(() => import('views/dashboard/MyPortfolio')));

const MarketPlace = Loadable(lazy(() => import('views/pages/marketPlace')));

const Setting = Loadable(lazy(() => import('views/settings/Setting')));
const Broker = Loadable(lazy(() => import('views/settings/BrokerDetails')));



const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'myPortfolio',
          element: <MyPortfolio />
        }
      ]
    },
    {
      path: 'settings',
      children: [
        { path: 'brokerDetails', element: <Broker /> },
        {
          path: 'setting',
          element: <Setting />
        }
      ]
    },
    {
      path: 'pages',
      children: [{ path: 'marketplace', element: <MarketPlace /> }]
    }

  ]
};

export default MainRoutes;
