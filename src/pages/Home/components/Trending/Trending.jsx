import React from "react";
import "./Trending.scss";
import { Link } from "react-router-dom";
const Trending = () => {
  return (
    <div className="trending">
      <div className="trending__container">
        <div className="ternding__title">
          <h3>TRENDING</h3>
        </div>
        <div className="sub__product__titles">
          <Link className="topproducts trend__item">Top Products</Link>
          <Link className="newarrivals trend__item">New Arrivals</Link>
          <Link className="bestsellers trend__item">Best Sellers</Link>
        </div>
        <div className="trending__content-wrapper">
          <div className="trending__content"></div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
