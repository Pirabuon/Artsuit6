import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import menu from "./images/menu.png";

import ShareButton from "./share";
import MobileNav from "./MobileNav";
import NavFooter from "./NavFooter";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row onlyWeb">
            <div className="col-12 col-md-3">
              <Link to="/" className="logo">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-12 col-md-9">
              <div className="nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li className="spl">
                    <Link to="/contact">Get Start</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row onlyMobile ">
            <div className="mobIcons">
              <MobileNav />

              <Link to="/" className="logo">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav mob">
              <ul>
                <li className="spl">
                  <Link to="/contact">Get Start</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
