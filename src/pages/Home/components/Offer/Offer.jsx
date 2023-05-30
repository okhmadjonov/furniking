import React from "react";
import "./Offer.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container">
        <div className="offer__container-inner">
          <div className="offer__inner__left">
            <div className="offer__left__inner">
              <div className="furniture__content">
                <h3>Modern Furniture Collections</h3>
                <p>Starting from $500</p>
                <Link className="read__more">
                  Read more <BsArrowRight className="arr" />
                </Link>
              </div>
            </div>
          </div>
          <div className="offer__inner__right">
            <div className="offer__inner__right-top">
              <div className="right__top__inner">
                <div className="book__case">
                  <h3>Geometric Bookcase</h3>
                  <p>Up to 20% discount</p>
                  <Link className="read__more">
                    Read more <BsArrowRight className="arr" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="offer__inner__right-bottom">
              <div className="left__top__inner">
                <div className="minimal__sofa">
                  <h3>Minimal Sofa collections</h3>
                  <p>Sale upto 40% discount</p>
                  <Link className="read__more">
                    Read more <BsArrowRight className="arr" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
