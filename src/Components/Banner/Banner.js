import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__middle">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h2>Best food waiting for your belly</h2>
          <br />
          <input
            type="text"
            placeholder="Search food items"
            className="banner__input"
          />
          <input type="submit" value="Submit" className="banner__button" />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Banner;
