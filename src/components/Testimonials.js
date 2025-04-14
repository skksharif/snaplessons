import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = ({ testimonials, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, interval);
    return () => clearInterval(autoplay);
  }, [currentIndex, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="slideshow-t">
        <div className="slideshow-testimonials-t">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <p className="review"><b>"{testimonial.review}"</b></p>
              <p>{testimonial.desc}</p>
              <p className="name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <button onClick={prevSlide}>
          <img src="./images/slider/left-arrow-b.png" alt="Previous" />
        </button>
        <button onClick={nextSlide}>
          <img src="./images/slider/right-arrow-b.png" alt="Next" />
        </button>
      </div>
      <div className="dot-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
