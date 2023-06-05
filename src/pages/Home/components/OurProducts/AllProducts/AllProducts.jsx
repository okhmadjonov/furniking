import React, { useEffect } from "react";
import "./Allproducts.scss";
import { BsStar, BsHeart, BsBagPlus, BsEye } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  BsArrowRightShort,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../../reduxToolkit/products/extraReducer";
import { addToCart } from "../../../../../reduxToolkit/products/productsSlice";
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
  const { allProducts } = useSelector((state) => state.persistedReducer);
  const { korzinka } = useSelector((state) => state.persistedReducer);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { id, type, prioritet, imgUrl, name, new_price, old_price } =
    allProducts;

  return (
    <div className="products__container">
      {allProducts?.map((item, index) => (
        <div className="product" key={index}>
          <div
            className="product__img"
            style={{
              backgroundImage: `url(${item.imgUrl})`,
            }}>
            <div className="product__prioritet">
              <p
                className={
                  item.prioritet === "New"
                    ? "prioritet"
                    : item.prioritet === "Sale"
                    ? "prioritet__green"
                    : item.prioritet === "-30%"
                    ? "prioritet__red"
                    : "prioritet"
                }>
                {item.prioritet}
              </p>
            </div>
            <div className="product__hover__items">
              <div className="hover__item heart">
                <BsHeart />
              </div>
              <div
                className="hover__item bag"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      type,
                      imgUrl,
                      name,
                      prioritet,
                      new_price,
                      old_price,
                    })
                  )
                }>
                <BsBagPlus />
              </div>
              <div className="hover__item update">
                <RxUpdate />
              </div>

              <div className="hover__item eye">
                <BsEye />
              </div>
            </div>
          </div>

          <div className="product__name">
            <p>{item.type}</p>
            <h3>{item.name}</h3>
          </div>
          <div className="product__price__stars">
            <div className="new__old__price">
              <p className="new_p">${item.new_price}</p>
              <p className="old_p">${item.old_price}</p>
            </div>
            <div className="stars">
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
