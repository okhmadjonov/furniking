import React from "react";
import "./Cart.scss";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const { korzinka } = useSelector((state) => state.persistedReducer);
  console.log(korzinka);
  // const { id, type, imgUrl, name, prioritet, new_price, old_price } = korzinka;

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__title">
          <h2>Your Selected products, they are not bought yet !!!</h2>
        </div>
        <div className="cart__body">
          {korzinka?.map((item, index) => (
            <div className="product" key={index} id={index}>
              <div
                className="product__img"
                style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
              <div className="product__body">
                <div className="type__name">
                  <p className="type">{item.type}</p>
                  <p className="name">{item.name}</p>
                </div>

                <div className="new__old__price">
                  <p className="prioritet">{item.prioritet}</p>
                  <p className="price">$ {item.new_price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
