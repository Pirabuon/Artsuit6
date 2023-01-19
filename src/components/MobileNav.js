import React, { useState } from "react";
import menu from "./images/menu.png";
import { Link } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`mobile-nav ${isOpen ? "animate" : ""} `}
      style={{
        position: "absolute",
        left: isOpen ? 0 : "-300px",
        maxWidth: "300px"
      }}
    >
      {!isOpen && (
        <button className="menuOpen" onClick={toggleNav}>
          <img className="menuOpen" src={menu} alt="naviIcon" />
        </button>
      )}
      {isOpen && (
        <div>
          <button className="menuOpen" onClick={toggleNav}>
            <img src={menu} alt="naviIcon" />
          </button>

          <ul>
            <li onClick={toggleNav}>
              <Link to="/">Home</Link>
            </li>

            <li className="hsSub">
              <div>
                <li onClick={toggleNav}>
                  <Link to="/web">Web Examples</Link>
                </li>
                <li onClick={toggleNav}>
                  <Link to="/video">Video Examples</Link>
                </li>
                <li onClick={toggleNav}>
                  <Link to="/print">Print Examples</Link>
                </li>
                <li onClick={toggleNav}>
                  <Link to="/marketing">Marketing Examples</Link>
                </li>
              </div>
            </li>

            <li className="spl" onClick={toggleNav}>
              <Link to="/contact">Get Start</Link>
            </li>
          </ul>
          <div className="hider" onClick={toggleNav}>
            hider
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
