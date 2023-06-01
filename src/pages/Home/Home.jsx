import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonials/Testimonial";
import Blogs from "./components/Blogs/Blogs";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Feature />
      <Offer />
      <SpecialOffer />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
