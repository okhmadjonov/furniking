import React from "react";
import "./OurProducts.scss";
import { Link } from "react-router-dom";
const OurProducts = () => {
  return (
    <div className="ourproducts">
      <div className="ourproducts__container">
        <div className="ourproducts__title">
          <h3>OUR PRODUCTS</h3>
        </div>
        <div className="ourproducts__sub__titles">
          <Link className="allproducts op__item">All Products</Link>
          <Link className="bestsellers op__item">Best Sellers</Link>
          <Link className="newarrivals op__item">New Arrivals</Link>
          <Link className="todaysdeals op__item">Todays Deals</Link>
        </div>

        <div className="ourproducts__content-wrapper">
          <div className="ourproducts__content"></div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
