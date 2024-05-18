import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./Wedding.css";
import { APIURL, URLS } from "../../config";

const Wedding = () => {
  const [imgList, setImageList] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetch(URLS.API_Wedding)
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
        Wedding
      </h1>
      <div className="BabyContainer">
        <div className="imgCenter">
          {imgList.map((e, index) => (
            <div
              key={index}
              style={{ position: "relative", width: "550px", height: "550px" }}
            >
              {!loadedImages[index] && (
                <div className="placeholder">
                  <span className="placeholder-text">Loading...</span>
                </div>
              )}
              <Image
                width={550}
                height={550}
                className="aa"
                src={APIURL + e.attributes.wedding.data.attributes.url}
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

export default Wedding;
