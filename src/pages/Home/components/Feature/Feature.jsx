import React from "react";
import "./Feature.scss";
import free from "../../../../assets/img/free.png";
import gift from "../../../../assets/img/gift.png";
import payment from "../../../../assets/img/payment.png";
import support from "../../../../assets/img/support.png";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__container">
        <div className="feature__items">
          <div className="item">
            <div className="item__img">
              <img src={free} alt="Free" />
            </div>
            <div className="item__desc">
              <h3>Free Shipping</h3>
              <p>Orders over $100</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img">
              <img src={gift} alt="Gift" />
            </div>
            <div className="item__desc">
              <h3>Smart Gift Card</h3>
              <p>Buy $1000 to get card</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img">
              <img src={payment} alt="Payment" />
            </div>
            <div className="item__desc">
              <h3>Quick Payment</h3>
              <p>100% secure payment</p>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img src={free} alt="Free" />
            </div>
            <div className="item__desc">
              <h3>24/7 Support</h3>
              <p>Quick support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
