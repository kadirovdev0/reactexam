import React, { useContext, useState } from "react";
import { FaHeart, FaBars } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaTwitter, FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContextApi } from "../context/userContext";
import { getAuth, signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  const { currentUser } = useContext(UserContextApi);
  const [side, setSide] = useState(false);

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {

      });
  };
  const stl = {
    size: "w-full justify-evenly sticky top-0 left-0 z-[100] bg-[#F9F9F9] h-[80px] flex items-center px-[10px] lg:px-[30px] font-['Montserrat'] border-b-[1px]",
    ul: "lg:flex hidden  w-[700px]  justify-between",
    bars: "lg:hidden block text-[25px] text-[#8D8D8D] font-bold cursor-pointer",
    logo: "lg:w-[200px] w-[150px] ml-[-40px]",
    li: "text-[13px] group transition duration-3000  items-center flex ml-[-50px]",
    icons: "flex  justify-between w-[130px] lg:w-[100px]",
    icon: "text-[20px] text-[#8D8D8D] font-bold cursor-pointer",
    dropdown:
      " absolute left-0 z-[10] top-[80px] w-full bg-white items-center justify-center h-0  group-hover:h-[200px] text-[22px] font-[600] text-[#565656] flex duration-300 border-b-[1px]",
    drop: "mr-[30px] cursor-pointer hover:text-blue-600 duration-300 hidden group-hover:block",
    shadow:
      "absolute w-full left-0 top-[80px] z-[-5] duration-300 h-[89vh] hidden group-hover:block bg-black/[0.8]",
    sidebar: `${side ? "block" : "hidden"
      } z-0 absolute  w-[85%] right-0 duration-3000 transition top-0 h-[100vh] bg-[#F9F9F9] py-[60px] px-[30px]`,
    side_li: "mt-[15px] underline decoration-dotted decoration-blue-400",
    plus: "rotate-45 text-[40px] absolute right-0 top-[-20px]",
    shadow2: `${side ? "block" : "hidden"
      } absolute w-full left-0 top-[80px] z-[-5] duration-300 h-[100vh]  group-hover:block bg-black/[0.8] `,
    signout: `${currentUser?.displayName ? "flex" : "!hidden"
      } absolute left-[-30px] top-[20px] w-[100px] hidden duration-300 group-hover:flex items-center justify-center rounded-[10px] bg-red-700 text-white h-[30px]`,
    login: "relative group",
    mdsign: `${currentUser?.displayName ? "flex" : "!hidden"
      } absolute left-[0px] top-[30px] w-[100px]  items-center justify-center rounded-[10px] bg-red-700 text-white h-[30px]`,
  };
  return (
    <div className={stl.size}>
      <Link to="/">
        <img
          className={stl.logo}
          src="https://cdn.shopify.com/s/files/1/0001/5211/files/Poketo-Logo-Site.png?v=1613518993"
          alt=""
        />
      </Link>

      <ul className={stl.ul}>
        <li className={stl.li}>
          <Link to="/products">Shop All</Link>
          {/* <div className={stl.shadow}></div> */}

          <div className={stl.dropdown}>
            <li className={stl.drop}>Shop All</li>
            <li className={stl.drop}>New Arrivals</li>
            <li className={stl.drop}>Best Sellers</li>
            <li className={stl.drop}>Gift Guide</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://poketo.vercel.app">Gift Guide</a>
          <div className={stl.dropdown}>
            <li className={stl.drop}>Gifts under $25</li>
            <li className={stl.drop}>Gifts under $50</li>
            <li className={stl.drop}>Gifts under $100</li>
            <li className={stl.drop}>Gift Wrap & Cards</li>
            <li className={stl.drop}>Stocking Stuffers</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://www.poketo.com/collections/shop">Paper & Planners</a>
          <div className={stl.dropdown}>
            <li className={stl.drop}>All Stationery</li>
            <li className={stl.drop}>Calendars & Planners</li>
            <li className={stl.drop}>Greeting Cards & Gift Wrap</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://www.poketo.com/collections/shop">Desk Supplies</a>
          <div className={stl.dropdown}>
            <li className={stl.drop}>All Supplies</li>
            <li className={stl.drop}>Pens & Pencils</li>
            <li className={stl.drop}>Staplers & Scissors</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://www.poketo.com/collections/shop">Home Decor</a>
          <div className={stl.dropdown}>
            <li className={stl.drop}>All Home Decor</li>
            <li className={stl.drop}>Drinkware</li>
            <li className={stl.drop}>Dinnerware</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://www.poketo.com/collections/shop">
            Apparel & Accessories
          </a>
          <div className={stl.dropdown}>
            <li className={stl.drop}>Apparel</li>
            <li className={stl.drop}>Accessories</li>
            <li className={stl.drop}>Bags</li>
            <li className={stl.drop}>Wallets,Cases,Folios</li>
          </div>
        </li>
        <li className={stl.li}>
          <a href="https://www.poketo.com/collections/shop">Wholesale</a>
        </li>
        <li className={stl.li}>
          <Link className={stl.login} to="/login">
            {currentUser?.displayName ? currentUser.displayName : "Login"}
            <span onClick={logOut} className={stl.signout}>
              Sign Out
            </span>
          </Link>
        </li>
      </ul>
      <ul className={stl.icons}>
        <li className={stl.icon}>
          <FiSearch />
        </li>
        <li className={stl.icon}>
          <Link to={"/cart"}>
            <FiShoppingCart />
          </Link>
        </li>
        <li className={stl.icon}>
          <FaHeart />
        </li>
        <a href="http://localhost:3001/admin" className={stl.icon}>
          <CgProfile />
        </a>
      </ul>
      <FaBars className={stl.bars} onClick={() => setSide(true)} />
      <div className={stl.shadow2} onClick={() => setSide(false)}></div>

      <div className={stl.sidebar}>
        <ul className="flex relative">
          <h1>MENU</h1>
          <AiOutlinePlus onClick={() => setSide(false)} className={stl.plus} />
        </ul>
        <ul className="mt-[30px]">
          <li className={stl.side_li}>
            <Link to="/products">Shop All</Link>
          </li>
          <li className={stl.side_li}>Gift Guide</li>
          <li className={stl.side_li}>Papers & Planners</li>
          <li className={stl.side_li}>Desk Supplies</li>
          <li className={stl.side_li}>Home Decor</li>
          <li className={stl.side_li}>Apparel & Accessories</li>
          <li className={stl.side_li}>Wholesale</li>
          <li style={{ marginTop: "40px" }} className={stl.side_li}>
            <Link className={stl.login} to="/login">
              {currentUser?.displayName ? currentUser.displayName : "Login"}
              <span
                style={{ display: "flex !important" }}
                onClick={logOut}
                className={stl.mdsign}
              >
                Sign Out
              </span>
            </Link>
          </li>
        </ul>

        <ul className="flex text-[#565656] text-[25px] mt-[100px] w-[150px] justify-between">
          <FaTwitter />
          <FaFacebookSquare />
          <FaPinterest />
          <ImInstagram />
        </ul>
        <p className="text-[#565656] mt-[30px]">
          Copyright © 2022 Poketo <br />
          Ecommerce Software by Shopify
        </p>
      </div>
    </div>
  );
};

export default Navbar;
