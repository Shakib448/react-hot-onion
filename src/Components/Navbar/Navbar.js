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
              <Link className="nav-link active" to="/#">
                <ShoppingCartOutlinedIcon className="nav__cart" />
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/#">
                <button className="nav__button">Login</button>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/#">
                <button className="nav__button__active">Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
