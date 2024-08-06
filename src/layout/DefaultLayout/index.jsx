import Cube from 'components/Cube';
import Loader from 'components/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import '../../assets/css/index.css';

const MainContent = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading time

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div id="body">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Navbar />
                    <Outlet />
                    <Cube />
                    <Footer />
                </div>
            )}
        </div>
    );
};
export default MainContent;
