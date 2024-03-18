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
import "./Baby.css";

const imglist = [
  { image: img2 },
  { image: img1 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
];
const LifeStyle = () => {
  return (
    <div className="BabyContainer">
      <div className="imgCenter">
        {imglist.map((e) => (
          <img className="aa" src={e.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default LifeStyle;
