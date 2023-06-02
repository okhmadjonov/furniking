import React from "react";
import "./Trending.scss";
import { Link } from "react-router-dom";
import TopProducts from "./TopProducts/TopProducts";
const Trending = () => {
  return (
    <div className="trending">
      <div className="trending__container">
        <div className="ternding__title">
          <h3>TRENDING</h3>
        </div>
        <div className="sub__product__titles">
          <Link className="menu__topproducts trend__item">Top Products</Link>
          <Link className="menu__newarrivals trend__item">New Arrivals</Link>
          <Link className="menu__bestsellers trend__item">Best Sellers</Link>
        </div>
        <div className="trending__content-wrapper">
          <div className="trending__content">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
