import React from "react";
import SectionTitle from "../../components/SectionTitle";

import shapeImg2 from "../../assets/img/contact/shape-1-2.png";
import shapeImg3 from "../../assets/img/contact/shape-1-3.png";
import shapeImg4 from "../../assets/img/contact/shape-1-4.png";
import EnquiryForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="it-contact"
      className="it-contact-area it-contact-style-4 z-index p-relative pb-30 pt-30 pt-md-50 pb-md-100 "
    >
      <div className="it-contact-shape-2 d-none d-lg-block">
        <img src={shapeImg2} alt="" />
      </div>
      <div className="it-contact-shape-3 d-none d-xxl-block">
        <img src={shapeImg3} alt="" />
      </div>
      <div className="it-contact-shape-4 d-none d-lg-block">
        <img src={shapeImg4} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-7 col-lg-7 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-contact-left">
              <SectionTitle
                itemClass="it-contact-title-box pb-20"
                subTitleClass="it-section-subtitle-5"
                titleClass="it-section-title-3"
                title="Contact Us"
                titleImage=""
              />
              <div className="it-contact-text pb-15">
                <h5 className="fw-semibold mb-2" style={{ color: "#2fb899" }}>
                  Need Assistance?
                </h5>
                <p className="mb-2">
                  Our stock management experts are ready to help you. Whether
                  you're aiming to streamline warehouse operations, minimize
                  inventory errors, or need support with our platform—we're here
                  for you.
                </p>
                <ul className="list-unstyled mb-2">
                  <li>📦 Efficient Inventory Solutions</li>
                  <li>📈 Real-Time Stock Insights</li>
                  <li>🤝 Dedicated Customer Support</li>
                </ul>
                <p className="mb-0">
                  <strong>
                    Reach out today and take full control of your stock!
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
