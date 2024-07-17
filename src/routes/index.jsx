import { createBrowserRouter } from 'react-router-dom';

// routes
import LoginRoutes from './AuthenticationRoutes';
import DefaultRoutes from './DefaultRoutes';
import MainRoutes from './MainRoutes';

const router = createBrowserRouter([DefaultRoutes,MainRoutes, LoginRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
