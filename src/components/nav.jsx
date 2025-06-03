import React from "react";
import Logo from "../assets/4876138-200.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <Link className="nav__logo" to="/">
            <img src={Logo} className="nav__logo--img"></img>
            <h1 className="nav__logo--text">Movie Scavenger</h1>
          </Link>
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search/tt3896198"
                className="nav__link"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link to="/" className="nav__link nav__link--contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
