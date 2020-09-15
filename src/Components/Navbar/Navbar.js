import React from "react";
import navLogo from "../Resources/logo2.png";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <img src={navLogo} alt="" className="navbar__logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <ShoppingCartOutlinedIcon className="nav__cart" />
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <button className="nav__button">Login</button>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <button className="nav__button__active">Sign In</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
