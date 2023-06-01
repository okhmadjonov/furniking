import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TestiCarousel.scss";
const TestiCarousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <button onClick={prev} className="left-arrow">
            <FaChevronLeft />
          </button>
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
            {children}
          </div>
          <button onClick={next} className="right-arrow">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestiCarousel;
