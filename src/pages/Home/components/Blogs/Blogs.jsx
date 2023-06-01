import React from "react";
import "./Blogs.scss";
import { Link } from "react-router-dom";
import { BsTag } from "react-icons/bs";
import latest1 from "../../../../assets/img/latest1.png";
import latest2 from "../../../../assets/img/latest2.png";
import latest3 from "../../../../assets/img/latest3.png";
import latest4 from "../../../../assets/img/latest4.png";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs__container">
        <div className="blogs__title">
          <h3>OUR LATEST ARTICLES</h3>
        </div>
        <div className="blogs__content-wrapper">
          <div
            className="blogs__content-item"
            style={{ backgroundImage: `url(${latest1})` }}>
            <div className="content__item-inner">
              <div className="name__date">
                <p>
                  <span className="name">
                    {" "}
                    <BsTag /> FURNITURE
                  </span>
                  <span className="date">23 September 2022</span>
                </p>
              </div>
              <div className="description">
                <p>Beginner guide buying minimal sofa</p>
              </div>
              <Link className="read__more">Read more</Link>
            </div>
          </div>
          {/* Item One */}
          <div
            className="blogs__content-item"
            style={{ backgroundImage: `url(${latest2})` }}>
            <div className="content__item-inner">
              <div className="name__date">
                <p>
                  <span className="name">
                    {" "}
                    <BsTag /> FURNITURE
                  </span>
                  <span className="date">23 September 2022</span>
                </p>
              </div>
              <div className="description">
                <p>Buying best minimal computer table</p>
              </div>
              <Link className="read__more">Read more</Link>
            </div>
          </div>
          {/*Item TWO*/}
          <div
            className="blogs__content-item"
            style={{ backgroundImage: `url(${latest3})` }}>
            <div className="content__item-inner">
              <div className="name__date">
                <p>
                  <span className="name">
                    {" "}
                    <BsTag /> FURNITURE
                  </span>
                  <span className="date">23 September 2022</span>
                </p>
              </div>
              <div className="description">
                <p>How to choose best modern bench</p>
              </div>
              <Link className="read__more">Read more</Link>
            </div>
          </div>
          {/** ITem THREE */}
          <div
            className="blogs__content-item"
            style={{ backgroundImage: `url(${latest4})` }}>
            <div className="content__item-inner">
              <div className="name__date">
                <p>
                  <span className="name">
                    {" "}
                    <BsTag /> FURNITURE
                  </span>
                  <span className="date">23 September 2022</span>
                </p>
              </div>
              <div className="description">
                <p>Best Summer Outfit Style in this Country</p>
              </div>
              <Link className="read__more">Read more</Link>
            </div>
          </div>
          {/**Item Four */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
