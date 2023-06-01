import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonials/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Feature />
      <Offer />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
