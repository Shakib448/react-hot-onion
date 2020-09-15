import React from "react";
import { useForm } from "react-hook-form";
import "./DeliveryDetails.css";
import PlaceOrder from "./PlaceOrder";

const DeliveryDetails = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="deliveryDetails container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="ml-4">Edit Deliver Details</h1>
            <hr className="ml-4" />
            <form onSubmit={handleSubmit(onSubmit)} className="m-4">
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  name="delivery"
                  className="form-control"
                  placeholder="Deliver to door"
                  ref={register({ required: true })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.delivery && "Delivery is required"}
                </span>
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  name="roadNo"
                  placeholder="Road Number"
                  className="form-control"
                  ref={register({ required: true })}
                />
                <br />
                <span style={{ color: "red" }}>
                  {errors.roadNo && "Road number is required"}
                </span>
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  name="floor"
                  placeholder="Flat, suite or floor"
                  className="form-control"
                  ref={register({ required: true })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.floor && "Floor address is required"}
                </span>
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  name="business"
                  placeholder="Business Name"
                  className="form-control"
                  ref={register({ required: true })}
                />
                <br />
                <span style={{ color: "red" }}>
                  {errors.business && "Business is required"}
                </span>
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <textarea
                  rows="5"
                  name="address"
                  placeholder="Add delivery instructions"
                  className="form-control"
                  ref={register({ required: true })}
                />
                <br />
                <span style={{ color: "red" }}>
                  {errors.address && "Delivery details is required"}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Save & Continue"
                />
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
          <div class="col-md-4 order-md-2 mb-4">
            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
