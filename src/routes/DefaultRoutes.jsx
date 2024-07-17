// project imports
import MainContent from 'layout/DefaultLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
//home routing
const Home = Loadable(lazy(() => import('views/defaultApp/Home')));
const HowToUse = Loadable(lazy(() => import('views/defaultApp/HowToUse')));
const Contact = Loadable(lazy(() => import('views/defaultApp/Contact')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const DefaultRoutes = {
    path: '/',
    element: <MainContent />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'home',
            children: [
                {
                    path: 'default',
                    element: <Home />
                },
                {
                    path: 'howToUse',
                    element: <HowToUse />
                },
                {
                    path: 'contact',
                    element: <Contact />
                }
            ]
        }
    ]
};

export default DefaultRoutes;
