import React from "react";

const Sellers = () => {
  const stl = {
    size: "w-full h-fit oveflow-hidden lg:h-[880px] grid grid-cols-2 lg:grid-cols-4 bg-[#F9F9F9] font-['Montserrat']",
    box: "flex flex-col items-center relative  cursor-pointer group w-full h-fit",
    span: "absolute top-0 left-0 bg-[#2F47C3] w-[100px] h-[30px] flex items-center justify-center text-white text-[14px]",
    img: " group-hover:hidden duration-300 ease-in object-cover w-full h-[320px]",
    hovered_img:
      "hidden group-hover:block object-contain duration-300 delay-300 ease-out w-full h-[320px]",
    title:
      "font-[700] text-[18px] w-[180px] leading-[1] lg:w-[250px] text-center mt-[10px] h-[60px]",
    price: "italic text-[14px]",
  };
  return (
    <div className={stl.size}>
      <div className={stl.box}>
        <span className={stl.span}>Best Seller</span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Spectrum-Monthly-Wall-Planner_44a72b7c-b81f-426f-a32d-1470df21f1c3_480x.gif?v=1571437318"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Spectrum-Wall-Planner-Lifestyle_480x.jpg?v=1582320978"
          alt=""
        />
        <h1 className={stl.title}>Spectrum Wall Planner</h1>
        <p className={stl.price}>$48.00</p>
      </div>
      <div className={stl.box}>
        <span style={{ background: "#EF4043" }} className={stl.span}>
          Selling Fast
        </span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/2022-gif_e2a31b68-29d9-42c5-954f-b8ea0a60c294_480x.gif?v=1627498807"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/New-Stationery-lifestyle_5c00770b-2428-4f2a-8392-95fade20f28b_480x.jpg?v=1627498808"
          alt=""
        />
        <h1 className={stl.title}>Spectrum Mini Planner</h1>
        <p className={stl.price}>$24.00</p>
      </div>
      <div className={stl.box}>
        <span className={stl.span}>Best Seller</span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Self-Planner-V2-01_8244fea2-c58f-4c59-8db1-8ab92412336f_480x.jpg?v=1602872850"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Self-Planner-NL-04_480x.jpg?v=1602872851"
          alt=""
        />
        <h1 className={stl.title}>Self Planner</h1>
        <p className={stl.price}>$28.00</p>
      </div>
      <div className={stl.box}>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Creativity-Journal-V2-01_73d28992-d3d2-493d-9a6c-428548ffeaa0_480x.jpg?v=1602872547"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Creativity-Journal-NL-01_480x.jpg?v=1602872785"
          alt=""
        />
        <h1 className={stl.title}>Creativity Journal</h1>
        <p className={stl.price}>$28.00</p>
      </div>

      <div className={stl.box}>
        <span
          style={{
            background: "#E7E7E7",
            color: "#87879B",
            fontWeight: "600",
            width: "120px",
            height: "40px",
            fontSize: "12px",
          }}
          className={stl.span}
        >
          SOLD OUT
        </span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Green_480x.jpg?v=1581638980"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallets-Group-1x1_183c0a8e-613b-436b-beb0-708851058620_480x.jpg?v=1583867572"
          alt=""
        />
        <h1 className={stl.title}>Dome Wallet in Emerald</h1>
        <p className={stl.price}>$38.00</p>
      </div>
      <div className={stl.box}>
        <span className={stl.span}>Best Seller</span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Yellow_480x.jpg?v=1581638888"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Yellow-Open_480x.jpg?v=1581638895"
          alt=""
        />
        <h1 className={stl.title}>Dome Waller in Yellow</h1>
        <p className={stl.price}>$38.00</p>
      </div>
      <div className={stl.box}>
        <span style={{ background: "#EF4043" }} className={stl.span}>
          Selling Fast
        </span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Red_960x.jpg?v=1581638912"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Hand-Model-Red_480x.jpg?v=1583867743"
          alt=""
        />
        <h1 className={stl.title}>Dome Wallet in Red</h1>
        <p className={stl.price}>$38.00</p>
      </div>
      <div className={stl.box}>
        <span
          style={{
            background: "#E7E7E7",
            color: "#87879B",
            fontWeight: "600",
            width: "120px",
            height: "40px",
            fontSize: "12px",
          }}
          className={stl.span}
        >
          SOLD OUT
        </span>
        <img
          className={stl.img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Navy_480x.jpg?v=1581638995"
          alt=""
        />
        <img
          className={stl.hovered_img}
          src="https://cdn.shopify.com/s/files/1/0001/5211/products/Dome-Wallet-Navy-Open_960x.jpg?v=1583867392"
          alt=""
        />
        <h1 className={stl.title}>Dome Wallet in Blue</h1>
        <p className={stl.price}>$38.00</p>
      </div>
    </div>
  );
};

export default Sellers;
