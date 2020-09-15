import React from "react";
import { useHistory } from "react-router-dom";
import rider from "../Resources/Image/Group 1151.png";
import "./Contact.css";

const Contact = () => {
  const history = useHistory();

  const handleThankYou = () => {
    history.push("/thankyou");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-4 text-center">
          <h1>Thanks for your valuable order</h1>
          <hr />
          <img src={rider} alt="" className="mb-4" />
          <br />
          <input
            onClick={handleThankYou}
            className="btn btn-primary"
            type="submit"
            value="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
