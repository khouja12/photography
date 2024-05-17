import React, { useEffect, useState } from "react";

import { Image } from "antd";

import "./Baby.css";
import { APIURL, URLS } from "../../config";

const Baby = () => {
  const [imgList, setImageList] = useState();

  useEffect(() => {
    fetch(URLS.API_baby)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log("data",URLS);
        setImageList(data.data);
      });
  }, []);
  return (
    <div>
      <h1 className="h1  text-center" style={{ fontSize: "50px" }}>
        {" "}
        Baby
      </h1>

      <div className="BabyContainer">
        <div className="imgCenter">
          {imgList &&
            imgList.map((e) => (
              <Image
                key={e.attributes.baby.data.attributes.url}
                width={350}
                height={450}
                className="aa"
                src={APIURL + e.attributes.baby.data.attributes.url}
                alt=""
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Baby;
