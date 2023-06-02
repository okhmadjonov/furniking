import React, { useEffect } from "react";
import "./Allproducts.scss";
import { Link } from "react-router-dom";
import {
  BsArrowRightShort,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../../reduxToolkit/products/extraReducer";
const AllProducts = () => {
  return (
    <div className="allproducts">
      <div className="allproducts__container">
        <div className="allproducts__content__products">
          <AllSingleProduct />
        </div>
        <div className="allproducts__content__bottom">
          {/* Bootom  */}
          <div className="bottom__item"></div>
          <div className="bottom__item">
            <Link className="naxt__page">
              Next page
              <span>
                <BsArrowRightShort />
              </span>
            </Link>
            <div className="page__numbers">
              <span>Page</span>
              <button>1</button>
              <span>of 100</span>
              <div className="left__right__swiper">
                <div className="swiper__left">
                  <BsChevronLeft />
                </div>

                <div className="swiper__right">
                  <BsChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

export const AllSingleProduct = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (allProducts.length === 0) {
    return null;
  }

  return (
    <div className="products__container">
      {allProducts?.map((item, index) => (
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
