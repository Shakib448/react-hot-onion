import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodData from "../FoodData";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  let { id } = useParams();
  const foodData = FoodData.find((item) => item.id == id);
  const [detailFood, setDetailFood] = useState([]);

  useEffect(() => {
    setDetailFood(foodData);
  }, [foodData]);

  return (
    <div className="categoryDetail container">
      <div className="row">
        <div className="col-md-6 categoryDetail__detail">
          <h1> {detailFood.title} </h1>
          <h6>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            tempore possimus ex, sequi voluptates fugit id consectetur quisquam
            nostrum quo maxime dolor ipsa, vitae quia vero provident, dicta modi
            animi aut! Debitis perspiciatis vitae placeat? Aut, voluptatibus ad
            beatae, nam iusto nisi, eum id animi numquam repudiandae
            consectetur? Aperiam, ea.{" "}
          </h6>
          <div className="row">
            <div className="col-md-4">
              <h1>$ {detailFood.price}</h1>
            </div>
            <div className="col-md-4 categoryDetail__cart"></div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={detailFood.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
