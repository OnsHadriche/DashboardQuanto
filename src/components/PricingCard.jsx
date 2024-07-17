import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
export const PricingCard = ({ typePack, price }) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="price-item rounded overflow-hidden">
                <div className="bg-dark p-4">
                    <h4 className="text-white mt-2">{typePack}</h4>
                    <div className="text-white">
                        <span className="align-top fs-4 fw-bold">$</span>
                        <h1 className="d-inline display-6 text-primary mb-0">{price}</h1>
                        <span className="align-baseline">/ Month</span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <span>HTML5 & CSS3</span>
                        <FontAwesomeIcon icon={faCheck} className="text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Bootstrap v5</span>
                        <FontAwesomeIcon icon={faCheck} className="text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Responsive Layout</span>
                        <FontAwesomeIcon icon={faCheck} className="text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Cross-browser Support</span>
                        <FontAwesomeIcon icon={faCheck} className="text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Remove Author s Credit</span>
                        <FontAwesomeIcon icon={faCheck} className="text-success pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>PHP & Ajax Contact Form</span>
                        <FontAwesomeIcon icon={faTimes} className=" text-danger pt-1" />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>6 Months Free Support</span>
                        <FontAwesomeIcon icon={faTimes} className=" text-danger pt-1" />
                    </div>
                    <a href="" className="btn btn-primary rounded-pill py-2 px-4 mt-3">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};
PricingCard.propTypes = {
    typePack: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};
