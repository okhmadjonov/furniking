import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonials/Testimonial";
import Blogs from "./components/Blogs/Blogs";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import Trending from "./components/Trending/Trending";
import OurProducts from "./components/OurProducts/OurProducts";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Feature />
      <Offer />
      <Trending />
      <SpecialOffer />
      <OurProducts />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
