import React from "react";
import gift from "../images/gift.jpg";
import cal from "../images/cal.jpg";
import bags from "../images/bags.jpg";

const Category = () => {
  const stl = {
    size: "w-full h-fit lg:h-[650px] font-['Montserrat'] flex lg:flex-row flex-col",
    gift: "lg:w-[50%] w-full h-[400px] lg:h-full relative flex items-center justify-center group overflow-hidden cursor-pointer",
    img: "absolute w-full object-cover h-[100%]  group-hover:scale-[1.1] duration-300",
    h1: "text-white text-[40px] font-[700] group-hover:text-blue-600 duration-300 z-10",
    shadow:
      "absolute h-full w-full z-0 bg-black/[0.5] opacity-0 group-hover:opacity-100 duration-300",
    cal: "w-full lg:h-[50%] h-[400px] relative flex items-center justify-center group overflow-hidden cursor-pointer",
    box: "lg:w-[50%] w-full h-full",
  };
  return (
    <div className={stl.size}>
      <div className={stl.gift}>
        <img className={stl.img} src={gift} alt="" />
        <div className={stl.shadow}></div>
        <h1 className={stl.h1}>Gift Guide</h1>
      </div>
      <div className={stl.box}>
        <div className={stl.cal}>
          <img className={stl.img} src={cal} alt="" />
          <div className={stl.shadow}></div>
          <h1 className={stl.h1}>2023 Calendars</h1>
        </div>
        <div className={stl.cal}>
          <img className={stl.img} src={bags} alt="" />
          <div className={stl.shadow}></div>
          <h1 className={stl.h1}>Accessories</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
