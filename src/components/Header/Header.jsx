import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { BsHandbag } from "react-icons/bs";
import { BiBell, BiUser } from "react-icons/bi";
import "./Header.scss";
import logo from "../../assets/img/logo.png";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenCollections = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-top">
          <div className="header__container-top__inner">
            <div className="welcome__to__our__online__shop">
              Welcome to our online shop
            </div>
            <div className="language__login__signup">
              <div className="language">
                <select name="language" id="language">
                  <option value="English">English (USD)</option>
                  <option value="Russian">Russian (RUBL)</option>
                  <option value="Uzbek">Uzbek (SO'M)</option>
                </select>
              </div>
              <div className="upright">|</div>
              <div className="login__signup">
                <Link className="login">Login</Link>
                or
                <Link className="signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
        {/* header__container-top END */}

        <div className="header__container-middle">
          <div className="header__container-middle__inner">
            <div className="logo">
              <Link to="/" className="logo__link">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="search__categories">
              <input
                type="search"
                name="search"
                className="search"
                placeholder="Search here"
              />
              <select name="categories" id="categories">
                <option value="Categories">Categories</option>
              </select>
              <Link className="search__btn">
                {" "}
                <FiSearch />
              </Link>
            </div>
            <div className="bag__bell__user">
              <Link className="bag">
                <BsHandbag />
              </Link>
              <Link className="bell">
                <BiBell />
              </Link>
              <Link className="user">
                <BiUser />
              </Link>
            </div>
          </div>
        </div>
        {/* Header container middle END */}

        <div className="header__container-bottom">
          <div className="header__container-bottom__inner">
            <div className="allcollections__menu">
              <div className="allcollections">
                <div
                  className="allcollections__wrapper"
                  onClick={handleOpenCollections}>
                  <div className="burgers">
                    <div className="burger1"></div>
                    <div className="burger2"></div>
                    <div className="burger3"></div>
                  </div>
                  <h3>ALL COLLECTIONS</h3>
                </div>
                <div
                  className={classNames("allcollections__body", {
                    allcollections__body__hide: isOpen,
                  })}>
                  <Link className="body__item">All</Link>
                  <Link className="body__item">New Arrivals</Link>
                  <Link className="body__item">Hot Sale</Link>
                  <Link className="body__item">Furniture</Link>
                  <Link className="body__item">Amrature</Link>
                  <Link className="body__item">Tabble</Link>
                  <Link className="body__item">Chair</Link>
                  <Link className="body__item">Sofa</Link>
                  <Link className="body__item">Mirros</Link>
                  <Link className="body__item">Stools</Link>
                  <Link className="body__item">Benches</Link>
                </div>
              </div>
              <div className="menu">
                <Link className="menu__link">HOME</Link>
                <Link className="menu__link">SHOP</Link>
                <Link className="menu__link">BLOG</Link>
                <Link className="menu__link">ABOUT</Link>
                <Link className="menu__link">CONTACT US</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
