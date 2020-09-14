import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="category container">
      <div className="category__middleButton">
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
      <br />
      <div className="category__items">
        <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
