

const ContactForm = () => {
    return (
      <div className="container-xxl py-5" id="contact">
        <div className="container py-5 px-lg-5">
  
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
  
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactForm;
  