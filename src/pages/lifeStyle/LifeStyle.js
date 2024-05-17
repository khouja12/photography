import React, { useEffect, useState } from "react";
import img1 from "../../img/lifeStyle image/img1.JPG";
import img2 from "../../img/lifeStyle image/img2.jpg";
import img3 from "../../img/lifeStyle image/img3.jpg";
import img4 from "../../img/lifeStyle image/img4.jpg";
import img5 from "../../img/lifeStyle image/img5.jpg";
import img6 from "../../img/lifeStyle image/img6.jpg";
import img7 from "../../img/lifeStyle image/img7.jpg";
import img8 from "../../img/lifeStyle image/img8.jpg";
import img9 from "../../img/lifeStyle image/img9.JPG";
import img10 from "../../img/lifeStyle image/img10.JPG";
import img11 from "../../img/lifeStyle image/img11.JPG";
import img12 from "../../img/lifeStyle image/img12.JPG";
import img13 from "../../img/lifeStyle image/img13.JPG";
import img14 from "../../img/lifeStyle image/img14.JPG";
import img15 from "../../img/lifeStyle image/img15.JPG";
import img16 from "../../img/lifeStyle image/img16.JPG";
import img17 from "../../img/lifeStyle image/img17.JPG";
import img18 from "../../img/lifeStyle image/img18.jpg";
import img19 from "../../img/lifeStyle image/img19.jpg";
import img20 from "../../img/lifeStyle image/img20.JPEG";
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
  // const imglist = [
  //   { image: img2 },
  //   { image: img1 },
  //   { image: img3 },
  //   { image: img4 },
  //   { image: img5 },
  //   { image: img6 },
  //   { image: img7 },
  //   { image: img8 },
  //   { image: img9 },
  //   { image: img10 },
  //   { image: img11 },
  //   { image: img12 },
  //   { image: img13 },
  //   { image: img14 },
  //   { image: img15 },
  //   { image: img16 },
  //   { image: img17 },
  //   { image: img18 },
  //   { image: img19 },
  //   { image: img20 },
  // ];
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
              width={250}
              height={300}
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
