import React, { useEffect, useState } from "react";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import "./Category.css";
import foodData from "../FoodData";
import Breakfast from "../FoodData/Breakfast";
import Lunch from "../FoodData/Lunch";
import Dinner from "../FoodData/Dinner";

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

  return (
    <div className="category container">
      <div className="category__middleButton">
        <button className="category__btn" onClick={() => setFood("Breakfast")}>
          Breakfast
        </button>
        <button className="category__btn" onClick={() => setFood("Lunch")}>
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
              <CategoryDetail key={item.id} item={item} />
            ) : (
              ""
            )
          )}
        </div>
        <div className="category__checkoutBtn">
          <button> Checkout Your Food</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
