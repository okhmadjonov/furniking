import React from "react";

import "./Footer.scss";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/footer-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__conteiner-top">
          <div className="footer__top-item1">
            <div className="footer__logo">
              <Link to="/" className="foot_logo">
                <img src={footerLogo} alt="FooterLogo" />
              </Link>
            </div>
            <div className="footer__subtitle">
              <p>
                Funking is the a popular Ecommerce site. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <div className="footer__social__links">
              <FaFacebookF />
              <FaTwitter />
              <AiFillInstagram />
              <TiSocialPinterest />
            </div>
          </div>
          <div className="footer__top-item">
            <Link className="footer__item1">Help</Link>
            <Link className="footer__item">Privacy policy</Link>
            <Link className="footer__item">Shipping & Delivery</Link>
            <Link className="footer__item">Refund Policy</Link>
            <Link className="footer__item">Track Your Order</Link>
          </div>
          <div className="footer__top-item">
            <Link className="footer__item1">Store</Link>
            <Link className="footer__item">Furniture</Link>
            <Link className="footer__item">Tabble</Link>
            <Link className="footer__item">Sofa</Link>
            <Link className="footer__item">Other</Link>
          </div>
          <div className="footer__top-item">
            <Link className="footer__item1">Supports</Link>
            <Link className="footer__item">Feedback</Link>
            <Link className="footer__item">Contact us</Link>
            <Link className="footer__item">Download app</Link>
            <Link className="footer__item">Terms conditions</Link>
          </div>
        </div>
        <div className="footer__conteiner-bottom">
          <div className="allrights">
            <p>© 2023 Furniking - All rights reserved.</p>
          </div>
          <div className="privacy__security__terms">
            <Link className="privacy">Privacy</Link>
            <Link className="security">Security</Link>
            <Link className="terms">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
