import React from "react";
import "./OurProducts.scss";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts/AllProducts";
const OurProducts = () => {
  return (
    <div className="ourproducts">
      <div className="ourproducts__container">
        <div className="ourproducts__title">
          <h3>OUR PRODUCTS</h3>
        </div>
        <div className="ourproducts__sub__titles">
          <Link className="or__menu__allproducts op__item op__active">
            All Products
          </Link>
          <Link className="or__menu__bestsellers op__item">Best Sellers</Link>
          <Link className="or__menu__newarrivals op__item">New Arrivals</Link>
          <Link className="or__menu__todaysdeals op__item">Todays Deals</Link>
        </div>

        <div className="ourproducts__content-wrapper">
          <div className="ourproducts__content">
            <AllProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
