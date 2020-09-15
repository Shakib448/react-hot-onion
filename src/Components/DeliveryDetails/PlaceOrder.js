import React from "react";
import "./DeliveryDetails.css";

const PlaceOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="placeOrder">
      <form onSubmit={handleSubmit}>
        <h5>From: Gulshan Plaza Restura Grp</h5>
        <h5>Time: Aribing in 20-30 min</h5>
        <h5>Road No: 107 Rd No 8</h5>
        <br />
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed ">
            <div>
              <h6 className="my-0">Subtotal :</h6>
            </div>
            <span className="text-muted">$520</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0"> Tax :</h6>
            </div>
            <span className="text-muted">$5 </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Delivery fee :</h6>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">Total :</h6>
            </div>
            <span className="text-muted">$320</span>
          </li>
        </ul>
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default PlaceOrder;
