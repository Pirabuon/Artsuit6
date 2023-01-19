import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";
import LogoSlider from "../components/LogoSlider";

const Footer = () => {
  return (
    <>
      <div className="partnerSection">
        <div className="container">
          <LogoSlider />
        </div>
      </div>
      <div className="footerSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <ul>
                <li>
                  <a href="">
                    <img src={logo} alt="Logo" />
                  </a>
                </li>
                <li>Beta</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h3 className="title">Our Branches</h3>
              <ul>
                <li>
                  <Link to="">France</Link>
                </li>
                <li>
                  <Link to="">Canada</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h3 className="title">Useful links</h3>
              <ul>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
