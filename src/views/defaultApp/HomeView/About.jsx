import AboutIMG from '../../../assets/images/home/About.png';
import '../../../assets/css/About.css';

const About = () => {
    return (
        <div>
            <div className="container-xxl py-5" id="about">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp about-content" data-wow-delay="0.1s">
                            <h5 className="text-primary-gradient fw-medium">About QuantoTrade</h5>
                            <h1 className="mb-4">
                                Welcome to your one-stop destination for creating, customizing, and backtesting trading strategies
                            </h1>
                            <p className="mb-4">
                                all without writing a single line of code. Simplify your trading journey with our intuitive platform,
                                designed to empower traders of all levels. Explore a wide range of tools and features that allow you to
                                bring your trading ideas to life with ease and precision. Get started today and take control of your trading
                                strategy development like never before.
                            </p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="d-flex">
                                        <i className="fa fa-database fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                                        <div className="ms-3">
                                            <h2 className="mb-0" data-toggle="counter-up">
                                                100000000
                                            </h2>
                                            <p className="text-primary-gradient mb-0">Available Stocks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="d-flex">
                                        <i className="fa fa-money-bill fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                                        <div className="ms-3">
                                            <h2 className="mb-0" data-toggle="counter-up">
                                                100%
                                            </h2>
                                            <p className="text-secondary-gradient mb-0">Profits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">
                                Launch App
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid wow fadeInUp about-image" data-wow-delay="0.5s" src={AboutIMG} alt="About App" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
