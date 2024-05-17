import React, { useEffect, useState } from "react";

import { Image } from "antd";
import "./LifeStyle.css";
import { APIURL, URLS } from "../../config";
const LifeStyle = () => {
  const [imgList, setImageList] = useState();

  useEffect(() => {
    fetch(URLS.API_LIFESTYLE)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setImageList(data.data);
      });
  }, []);

  return (
    <div>
      <h1 className="h1  text-center" style={{ fontSize: "50px" }}>
        {" "}
        LifeStyle
      </h1>
      <div className="BabyContainer">
        <div className="imgCenter">
          {imgList && imgList.map((e) => (
            <Image
            width={350}
            height={450}
              className="aa"
              src={ APIURL + e.attributes.image.data.attributes.url}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;
