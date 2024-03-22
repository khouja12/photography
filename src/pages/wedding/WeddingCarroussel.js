import React, { useState } from "react";
import "./WeddingCarroussel.css";

const WeddingCarroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    console.log("Going to next slide");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    console.log("Going to previous slide");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  console.log("Current index:", currentIndex);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "slide active" : "slide inactive"
            }
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default WeddingCarroussel;
