import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Feature />
    </div>
  );
};

export default Home;
