import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import DefaultRoutes from './DefaultRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([DefaultRoutes, MainRoutes, LoginRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
