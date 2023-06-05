import React, { useEffect } from "react";
import "./TopProducts.scss";
import { addToCart } from "../../../../../reduxToolkit/products/productsSlice";
import { BsStar, BsHeart, BsBagPlus, BsEye } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
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
  // const { cart } = useSelector((state) => state.products);
  const { trendProductsData } = useSelector((state) => state.persistedReducer);
  const { korzinka } = useSelector((state) => state.persistedReducer);

  useEffect(() => {
    dispatch(getAllTrends());
  }, []);

  const handleAdd = (el) => {
    // console.log(el);
    dispatch(addToCart(el));
  };

  if (trendProductsData.length === 0) {
    return null;
  }

  return (
    <div className="products__container">
      {trendProductsData?.map((item, index) => (
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
              <div className="hover__item bag" onClick={() => handleAdd(item)}>
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
