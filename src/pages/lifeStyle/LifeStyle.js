import React from "react";
import limg1 from "../../img/lifeStyle/Limg1.jpg";
import limg2 from "../../img/lifeStyle/limg2.jpg";
import limg3 from "../../img/lifeStyle/limg3.jpg";
import limg4 from "../../img/lifeStyle/limg4.jpg";
import limg5 from "../../img/lifeStyle/limg5.jpg";
import limg6 from "../../img/lifeStyle/limg6.jpg";
import "./LifeStyle.css";



const imglist = [
  {image :limg1},
  {image :limg2},
  {image :limg3},{image :limg4},
  {image :limg5},{image :limg6}

]
const LifeStyle = () => {
  return (
    <div className="lifeStyleContainer">
      <div className="imgCenter">
      {imglist.map((e)=>  <img src={e.image} alt="" /> )}
       
       
      </div>
    </div>
  );
};

export default LifeStyle;
