import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./LifeStyle.css";
import { APIURL, URLS } from "../../config";

const LifeStyle = () => {
  const [imgList, setImageList] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch(URLS.API_LIFESTYLE)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setImageList(data.data);
      });
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [index]: true,
    }));
  };

  return (
    <div>
      <h1 className="h1 text-center" style={{ fontSize: "50px" }}>
        LifeStyle
      </h1>
      <div className="BabyContainer">
        <div className="imgCenter">
          {imgList.map((e, index) => (
            <div
              key={index}
              style={{ position: "relative", width: "350px", height: "450px" }}
            >
              {!loadedImages[index] && (
                <div className="placeholder">
                  <span className="placeholder-text">Loading...</span>
                </div>
              )}
              <Image
                width={350}
                height={450}
                className="aa"
                src={APIURL + e.attributes.image.data.attributes.url}
                alt=""
                onLoad={() => handleImageLoad(index)}
                style={{ display: loadedImages[index] ? "block" : "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;
