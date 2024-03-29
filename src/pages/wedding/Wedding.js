import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import { Carousel } from "react-responsive-carousel";
import img1 from "../../img/Wedding image/img1.JPG";
import img2 from "../../img/Wedding image/img2.JPG";
import img3 from "../../img/Wedding image/img3.JPG";
import img4 from "../../img/Wedding image/img4.JPG";
import img5 from "../../img/Wedding image/img5.JPG";
import "./Wedding.css";

const CarousselUI = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const image = [img2, img3, img4];
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="wholePageWedding">
    <h1  className="h1  text-center" style={{ fontSize: "50px" }}> Wedding</h1>
      <container className="caroussel-container">
        <div className="ImageWedding">
          <Carousel
            className="carousselWedding"
            selectedItem={selectedIndex}
            onChange={handleSelect}
            showStatus={false} // Hide status indicators
            showThumbs={true} // Hide thumbnail images
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Enable autoplay
            interval={3000} // Set autoplay interval to 5 seconds
          >
            {image.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <div className="sideImageWedding" >
            <img src={img1} />
            <img src={img5} />
          </div>
        </div>
      </container>
    </div>
  );
};

export default CarousselUI;
