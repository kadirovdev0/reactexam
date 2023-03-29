import React from "react";
import cal from "../images/cal.jpg";
import '../components/Banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
  const stl = {
    size: "w-full h-[600px] flex items-center justify-center relative  font-['Montserrat'] cursor-grab",
    bg: "absolute w-full h-full z-[1] object-cover",
    h1: "text-white text-[40px] lg:text-[52px] font-[800] w-[300px] text-center leading-[1]",
    block: "w-fit lg:w-[450px] h-[60%] m-auto  mt-[100px] flex flex-col items-center group duration-300 z-[2]",
    p: "opacity-[75%] text-white italic text-[18px] mt-[40px] text-center w-[70%]",
    btn: "w-[120px] h-[45px] bg-white text-[13px] font-[700] mt-[40px] hover:text-white hover:bg-black duration-300",
    shadow:
      "absolute top-0 z-[-3] w-full h-full bg-black/[0.5] opacity-0 duration-500 group-hover:opacity-100 transition",

  };
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          paddingBottom: "40px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="overflow-hidden">

      <div className={stl.size}>
        <img className={stl.bg} src={cal} alt="" />
        <div className={stl.block}>
          <h1 className={stl.h1}>30% Off All Everything</h1>
          <p className={stl.p}>
            Give the give of organization. Price is reflective of the discount
          </p>
          <button className={stl.btn}>SHOP NOW</button>
          <div className={stl.shadow}></div>
        </div>
      </ div>
      <a href="http://localhost:3000/products" className="fixed_btn">Get 10% off</a>
    </div >
  );
};

export default Banner;
