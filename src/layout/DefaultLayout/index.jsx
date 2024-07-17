import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const DefaultLayout = () => (
  <>
  <Navbar></Navbar>
  <div>
    <Outlet />
  </div>
    <Footer></Footer>

  </>
);

export default DefaultLayout;
