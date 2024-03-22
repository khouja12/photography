import React from "react";
import img1 from "../../img/baby img/img1.jpg";
import img2 from "../../img/baby img/img2.jpg";
import img3 from "../../img/baby img/img3.jpg";
import img4 from "../../img/baby img/img4.jpg";
import img5 from "../../img/baby img/img5.jpg";
import img6 from "../../img/baby img/img6.jpg";
import img7 from "../../img/baby img/img7.jpg";
import img8 from "../../img/baby img/img8.jpg";
import img9 from "../../img/baby img/img9.jpg";
import img10 from "../../img/baby img/img10.jpg";
import img11 from "../../img/baby img/img11.jpg";
import img12 from "../../img/baby img/img12.jpg";
import img13 from "../../img/baby img/img13.jpg";
import img14 from "../../img/baby img/img14.jpg";
import img15 from "../../img/baby img/img15.jpg";
import img16 from "../../img/baby img/img16.jpg";
import img17 from "../../img/baby img/img17.jpg";
import { Image } from 'antd';

import "./Baby.css";

const imglist = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
];
const Baby = () => {
  return (
    <div>
      <h1 className="h1  text-center" style={{ fontSize: "50px" }}>
        {" "}
        Baby
      </h1>

      <div className="BabyContainer">
        <div className="imgCenter">
          {imglist.map((e) => (
            <Image width={250} height={300}  className="aa" src={e.image} alt="" />
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Baby;
