import React from "react";
import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <nav className="NavFooter">
      <div className="backBtn">
        <ul>
          <li>
            <Link to="/blog">Menu</Link>
          </li>
          <li>
            <Link to="/work">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavFooter;
