import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Slideshow.css";
const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const autoplay = setInterval(nextSlide, interval);
    return () => clearInterval(autoplay);
  }, [currentIndex, interval]);

  return (
    <div className="slideshow">
      <div className="bg-color1"></div>
      <div className="bg-color2"></div>
      <div className="slideshow-images">
        {images.map((image, index) => (
          <NavLink to="/contact">
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentIndex ? "active" : ""}
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          </NavLink>
        ))}
      </div>
      <button onClick={prevSlide}>
        <img src="./images/slider/back.png" />
      </button>
      <button onClick={nextSlide}>
        <img src="./images/slider/next.png" />
      </button>
    </div>
  );
};

export default Slideshow;
