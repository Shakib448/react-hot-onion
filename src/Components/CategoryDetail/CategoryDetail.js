import React from "react";
import "./CategoryDetail.css";

const CategoryDetail = ({ item: { title, img, description, price } }) => {
  return (
    <div className="col-md-4">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">{description}</p>
          <h5>$ {price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
