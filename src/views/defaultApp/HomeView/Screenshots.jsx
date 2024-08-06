import { Link } from 'react-router-dom';
import step2 from '../../../assets/images/home/step2.png';

const Screenshots = () => {
    return (
        <div className="container-xxl bg-light mt-5 py-5">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid fadeInUp" style={{ animationDelay: '0.1s' }} src={step2} alt="AboutImage" />
                    </div>
                    <div className="col-lg-6 fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <h1 className="mb-4 text-primary-gradient">Build your ideal trading strategies swiftly</h1>
                        <h3 className="mb-4">
                            With <strong className="text-primary-gradient">QuantoTrade</strong>, create from scratch in minutes, no need for
                            extensive coding hours.
                        </h3>
                        <div className="row g-4">
                            <div className="col-sm-6 fadeIn" style={{ animationDelay: '0.5s' }}>
                                <Link
                                    to="#"
                                    className="d-flex justify-content-center align-items-center bg-primary-gradient rounded py-3 px-4 text-decoration-none"
                                >
                                    <h5 className="text-white mb-0">Learn To Use</h5>
                                </Link>
                            </div>
                            <div className="col-sm-6 fadeIn" style={{ animationDelay: '0.7s' }}>
                                <Link
                                    to="#"
                                    className="d-flex justify-content-center align-items-center bg-secondary-gradient rounded py-3 px-4 text-decoration-none"
                                >
                                    <h5 className="text-white text-center mb-0">Launch App</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screenshots;
