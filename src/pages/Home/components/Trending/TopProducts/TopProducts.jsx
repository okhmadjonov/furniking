import React, { useEffect } from "react";
import "./TopProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrends } from "../../../../../reduxToolkit/products/extraReducer";
const TopProducts = () => {
  return (
    <div className="topproducts">
      <div className="topproducts__slide_wrapper">
        <div className="topproducts__slide">
          <Products />
        </div>
      </div>
      <div className="topproducts__slide_dots">
        <div className="dots">
          <div className="dot"></div>
        </div>
        <div className="dots">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

export const Products = () => {
  const dispatch = useDispatch();
  const { trendProductsData } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllTrends());
  }, []);

  if (trendProductsData.length === 0) {
    return null;
  }

  console.log(trendProductsData);
  return (
    <div className="products__container">
      {trendProductsData?.map((item, index) => (
        <div className="product" key={index}>
          <div
            className="product__img"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}></div>
          {/* <div className="product__type"></div> */}
          <div className="product__name">
            <h3>{item.name}</h3>
          </div>
          <div className="product__price__stars"></div>
        </div>
      ))}
    </div>
  );
};
