import React from "react";
import c1 from "../Resources/Image/c1.png";
import c2 from "../Resources/Image/c2.png";
import c3 from "../Resources/Image/c3.png";
import "./Details.css";

const Details = () => {
  return (
    <div className="details container">
      <div className="row">
        <div className="col-md-6">
          <h1>Why you chose us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur id cum recusandae quidem, iusto hic rem totam eius!
            Ipsam, est?
          </p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={c1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="details__btn">See More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={c2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="details__btn">See More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={c3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="details__btn">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
