import React from "react";
import "./Testimonial.scss";
import TestiCarousel from "./TestiCarousel";
import Card from "./Card";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__title">
          <h3>What Our Customer Says</h3>
        </div>
        <TestiCarousel>
          <Card />
          <Card />
          <Card />
        </TestiCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
