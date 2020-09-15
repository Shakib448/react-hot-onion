import React, { useEffect, useState } from "react";
import "./Category.css";
import foodData from "../FoodData";
import { Link, useHistory } from "react-router-dom";

const Category = () => {
  const [food, setFood] = useState("Lunch");
  const [filterFood, setFilterFood] = useState([]);

  useEffect(() => {
    setFilterFood(foodData);
  }, []);

  useEffect(() => {
    setFilterFood([]);
    const filtered = foodData.map((p) => ({
      ...p,
      filtered: p.category.includes(food),
    }));
    setFilterFood(filtered);
  }, [food]);

  let history = useHistory();

  const handleCategoryDetail = (id) => {
    const url = `/food/category/${id}`;
    history.push(url);
  };

  return (
    <div className="category container">
      <div className="category__middleButton">
        <button className="category__btn" onClick={() => setFood("Breakfast")}>
          Breakfast
        </button>
        <button
          className={`category__btn ${food && "category__active"}`}
          onClick={() => setFood("Lunch")}
        >
          Lunch
        </button>
        <button className="category__btn" onClick={() => setFood("Dinner")}>
          Dinner
        </button>
      </div>
      <br />
      <br />
      <div className="category__items">
        <div className="row">
          {filterFood.map((item) =>
            item.filtered === true ? (
              <div
                className="col-md-4 category__card"
                key={item.id}
                onClick={() => handleCategoryDetail(item.id)}
              >
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-id">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <h5>$ {item.price}</h5>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="category__checkoutBtn">
          <Link to="/login">
            <button> Checkout Your Food</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
