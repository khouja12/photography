import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./Baby.css";
import { APIURL, URLS } from "../../config";

const Baby = () => {
  const [imgList, setImageList] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch(URLS.API_baby)
      .then((res) => res.json())
      .then((data) => {
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
        Baby
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
                src={APIURL + e.attributes.baby.data.attributes.url}
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

export default Baby;
