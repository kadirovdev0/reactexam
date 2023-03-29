import React from "react";
import { FaTwitter, FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  const stl = {
    size: "w-full h-fit pb-[50px] lg:h-[143vh] bg-[#565656]  lg:m-0 font-['Montserrat'] lg:flex",
    news: "lg:w-[50%] w-full h-fit px-[50px] lg:px-[100px]",
    h1: "text-[#87879B] font-[700] text-[15px] pt-[100px] lg:pt-[200px]",
    h3: "text-[#87879B] font-[700] text-[15px] pt-[100px] lg:pt-[200px]",
    p: "text-white w-[90%] lg:w-[450px] mt-[80px]",
    input:
      "bg-transparent border-[2px] border-[#87879B] hover:border-black outline-none duration-300 lg:w-[350px] w-[100%] h-[50px] indent-[20px] text-white",
    btn: "w-[100px] h-[40px] bg-[#84888F] mt-[10px] lg:m-2 text-white font-[600]",
    socials: "flex w-[200px] justify-between text-[25px] text-white mt-[30px]",
    h2: "text-[#87879B] font-[700] text-[15px] pt-[100px]",
    follow: "text-[13px] mt-[30px] text-white font-[600] opacity-75",
    menu: "lg:w-[50%] w-full h-fit px-[50px] lg:px-[100px]",
    visit:
      "text-white mt-[30px] decoration-dotted underline text-[30px] lg:text-[40px] font-[700] leading-[1.2]",
    ul: " text-white font-[600] text-[13px] mt-[50px] flex flex-col h-[200px] justify-around",
    li: "cursor-pointer hover:text-blue-500 underline decoration-dotted duration-300 hover:decoration-blue-500",
    copy: "text-[12px] font-[500] opacity-60  text-white mt-[200px] hidden lg:block",
  };
  return (
    <div className={stl.size}>
      <div className={stl.news}>
        <h1 className={stl.h1}>NEWSLETTER SIGN UP</h1>
        <p className={stl.p}>
          Sign up for our Poketo newsletter. You'll be the first to hear about
          new arrivals, surprise savings, and more.
        </p>
        <form className="lg:flex mt-[15px]">
          <input
            required={true}
            className={stl.input}
            type="text"
            placeholder="Email Adress"
          />
          <button className={stl.btn}>SIGN UP</button>
        </form>

        <h1 className={stl.h2}>SOCIAL LINKS</h1>
        <ul className={stl.socials}>
          <FaTwitter />
          <FaFacebookSquare />
          <FaPinterest />
          <ImInstagram />
        </ul>
        <p className={stl.follow}>Don't forget to follow us!</p>
        <p className={stl.copy}>Copyright © 2022 Poketo</p>
      </div>
      <div className={stl.menu}>
        <h1 className={stl.h3}>WHOLESALE</h1>
        <h1 className={stl.visit}>Visit our wholesale site</h1>
        <p className={stl.follow}>
          Are you a retailer interested in carrying Poketo products? We have a
          site just for you.
        </p>
        <h1 className={stl.h1}>FOOTER MENU</h1>
        <div className="flex">
          <ul className={stl.ul}>
            <li className={stl.li}>
              <Link to="/about">About</Link>
            </li>
            <li className={stl.li}>Shipping FAQ</li>
            <li className={stl.li}>Contact</li>
            <li className={stl.li}>Custom Production</li>
            <li className={stl.li}>Terms of Service</li>
            <li className={stl.li}>Privacy Policy</li>
            <li className={stl.li}>Refund Policy</li>
          </ul>
          <ul style={{ marginLeft: "50px" }} className={stl.ul}>
            <li className={stl.li}>Help FAQ</li>
            <li className={stl.li}>Returns</li>
            <li className={stl.li}>Journal</li>
            <li className={stl.li}>Wholesale</li>
            <li className={stl.li}>Accessibility</li>
            <li className={stl.li}>Terms of Service</li>
            <li className={stl.li}>Store Location</li>
          </ul>
        </div>
      </div>
      <p className="text-[12px] font-[500] opacity-60  text-white text-center mt-[50px] lg:hidden block">
        Copyright © 2022 Poketo
      </p>
    </div>
  );
};

export default Footer;
