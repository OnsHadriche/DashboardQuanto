import PropTypes from 'prop-types';

function StepRight({ item }) {
    console.log(item.propertyFlex);
    return (
        <div className="row g-5 py-5 align-items-center ">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <img className="img-fluid rounded" src={item.image} alt="" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="d-flex align-items-center mb-4">
                    <h1 className="mb-0">0{item.id}</h1>
                    <span className="bg-primary mx-2" style={{ width: '30px', height: '2px' }}></span>
                    <h5 className="mb-0">{item.title}</h5>
                </div>
                <p className="mb-4">{item.description}</p>
            </div>
        </div>
    );
}
StepRight.propTypes = {
    item: PropTypes.object.isRequired
};

export default StepRight;
