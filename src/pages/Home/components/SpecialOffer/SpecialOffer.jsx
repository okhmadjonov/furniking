import React from "react";
import "./SpecialOffer.scss";
import special1 from "../../../../assets/img/special1.png";
import special2 from "../../../../assets/img/special2.png";
import { Link } from "react-router-dom";
const SpecialOffer = () => {
  return (
    <div className="specialoffer">
      <div className="specialoffer__container">
        <div className="special__offer-title">
          <h3>SPECIAL OFFER</h3>
        </div>
        <div className="special__offer-content">
          <div
            className="offer__content-item"
            style={{ backgroundImage: `url(${special1})` }}>
            <div className="item__top-per">
              <p>40 % off</p>
            </div>
            <div className="item__content">
              <div className="item">
                <div className="item__title">Living Room Furniture</div>
                <div className="item__subtitle">
                  You don't have a chair. Are you ready for growth? Shop with us
                  40% discount!
                </div>
                <div className="item__price__shop">
                  <div className="price">
                    <span className="active__price">$150</span>
                    <span className="prev__price">$250</span>
                  </div>
                  <Link className="shop__now">SHOP NOW</Link>
                </div>
                <div className="item__delivery__time">
                  <div className="item__time">
                    <span>10</span>
                    <span>DAYS</span>
                  </div>
                  <div className="item__time">
                    <span>15</span>
                    <span>HRS</span>
                  </div>
                  <div className="item__time">
                    <span>30</span>
                    <span>MIN</span>
                  </div>
                  <div className="item__time">
                    <span>22</span>
                    <span>SECS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="offer__content-item"
            style={{ backgroundImage: `url(${special2})` }}>
            <div className="item__top-per">
              {" "}
              <p>50 % off</p>
            </div>
            <div className="item__content">
              <div className="item">
                <div className="item__title">Modern chair</div>
                <div className="item__subtitle">
                  Hot chairs of the modern era are now available in our stock.
                </div>
                <div className="item__price__shop">
                  <div className="price">
                    <span className="active__price">$75</span>
                    <span className="prev__price">$150</span>
                  </div>
                  <Link className="shop__now">SHOP NOW</Link>
                </div>
                <div className="item__delivery__time">
                  <div className="item__time">
                    <span>10</span>
                    <span>DAYS</span>
                  </div>
                  <div className="item__time">
                    <span>15</span>
                    <span>HRS</span>
                  </div>
                  <div className="item__time">
                    <span>30</span>
                    <span>MIN</span>
                  </div>
                  <div className="item__time">
                    <span>22</span>
                    <span>SECS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
