import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Feature />
      <Offer />
    </div>
  );
};

export default Home;
