import React from "react";
import "./Card.scss";
import user from "../../../../assets/img/user.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="top__img">
          <img src={user} alt="User" />
        </div>
        <div className="card__container">
          <div className="middle__text">
            <p>
              I like Furniking.com and as compared to other company it's polices
              and customers support is very good easy to reach., also many time
              they unable to delivered. The ultricies are pregnant while the
              quis is suspended. Risus commodo viverra maecenas accumsan lacus
              vel facilisist amet.
            </p>
          </div>
          <div className="bottom__text">
            <p>Angelina Joly</p>
            <span>Co-founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
