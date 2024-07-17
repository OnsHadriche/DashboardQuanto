import '../../../assets/css/Hero.css';

const Hero = () => {
    return (
        <div>
            <div className="container-fluid hero-header" style={{ backgroundColor: 'black' }}>
                <div className="container px-lg-5">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-8 hero-content">
                            <h1 className=" mb-4" style={{ color: '#7d97de' }}>
                                Create and Backtest Trading Strategies For Free Without Coding
                            </h1>
                            <a href="#" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3">
                                launch app
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
