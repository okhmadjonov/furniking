import React from "react";
import "./Banner.scss";
import bannerBig from "../../../../assets/img/bannerBig.png";
import bannerLittle1 from "../../../../assets/img/bannerLittle1.png";
import bannerLittle2 from "../../../../assets/img/bannerLittle2.png";
import bannerLittle3 from "../../../../assets/img/bannerLittle3.png";
import green__underline from "../../../../assets/img/green__underline.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__card">
          <div className="card__inner">
            <div className="card__slide">
              <div className="slider__description">
                <p className="green__title">TOP COLLECTIONS 2022</p>
                <p className="bold__title">
                  We Serve Your Dream Furniture
                  <img
                    className="green__underline"
                    src={green__underline}
                    alt="Green UnderLine "
                  />
                </p>
                <p className="discount">Get 50% off all products</p>
                <Link className="slide__shop__now1">SHOP NOW</Link>
              </div>
              <div
                className="slider__bigImg"
                style={{ backgroundImage: `url(${bannerBig})` }}></div>
              <div className="slider__imgItems">
                <div className="slider__imgItems__inner">
                  <div className="slider__imgItems__inner-item">
                    <img src={bannerLittle1} alt="Little 1" />
                    <span className="green__price">$120</span>
                    <p className="item__name">Office Desc Chair</p>
                  </div>
                  <div className="slider__imgItems__inner-item">
                    <img src={bannerLittle2} alt="Little 1" />
                    <span className="green__price">$180</span>
                    <p className="item__name">Home Alisa Sofa</p>
                  </div>
                  <div className="slider__imgItems__inner-item">
                    <img src={bannerLittle3} alt="Little 1" />
                    <span className="green__price">$250</span>
                    <p className="item__name">Modern Chair</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__dots">
              <div className="card__dot"></div>
              <div className="card__dot"></div>
              <div className="card__dot"></div>
              <div className="card__dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
