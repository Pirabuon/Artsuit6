import React from "react";
import { Link } from "react-router-dom";

const contactBarSection = () => {
  return (
    <div className="contactBarSection">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 txt text-center" data-aos="fade-up">
            <h3 className="toper" data-aos="fade-up"></h3>
            <h2 className="title" data-aos="fade-up">
              Why wait ?
            </h2>
            <p data-aos="fade-up">
              Contact us now and let's make your vision a reality!
            </p>
            <Link to="/contact">
              <button className="btn1" data-aos="fade-up">
                Contact us :)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactBarSection;
