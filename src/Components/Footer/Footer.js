import React from "react";
import "./Footer.css";
import logo from "../Resources/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="footer__logo" src={logo} alt="" />
          </div>
          <div className="col-md-3 ">
            <ul>
              <li>About Online food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <ul>
              <li>About Online food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 footer__copy">
            Copyright &copy; 2020 Online food
          </div>
          <div className="col-md-2 footer__copy">Privacy Policy</div>
          <div className="col-md-2 footer__copy">Terms of Use</div>
          <div className="col-md-2 footer__copy">Pricing</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
