import { Link } from 'react-router-dom';
import '../../assets/css/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0">QuantoTrade</h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* Add your toggle button content here */}
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/" className="nav-item nav-link active">
                            Home
                        </Link>
                        <Link to="/how-to-use" className="nav-item nav-link">
                            How To use
                        </Link>
                        <Link to="/contact" className="nav-item nav-link">
                            Contact
                        </Link>
                    </div>
                    <a href="/" className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
                        launch app
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
