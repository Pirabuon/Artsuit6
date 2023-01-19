import React from "react";

import FormContact from "../components/FormContact";
export default function HomePage() {
  return (
    <>
      <div className="heroSection page">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 mainTxt">
              <h1>
                <span>Contact us today </span>
                to elevate your brand!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container formSection">
        <div className="row">
          <div className="col-12 col-md-6 mb-5">
            <div data-aos="fade-up">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
