import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { deleteProduct } from "../redux/productReducer";

const Card = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.value);
  const stl = {
    box: "flex flex-col items-center relative cursor-pointer duration-300 group w-full h-fit",
    span: "absolute top-0 left-0 bg-[#2F47C3] w-[100px] h-[30px] flex items-center justify-center text-white text-[14px]",
    img: " group-hover:hidden duration-300  object-cover w-full h-[320px]",
    hovered_img:
      "hidden group-hover:block object-contain duration-300   w-full h-[320px]",
    title:
      "font-[700] text-[18px] w-[180px] leading-[1] lg:w-[250px] text-center mt-[10px] h-[60px]",
    price: "italic text-[14px]",
    btn: "absolute w-[150px] h-[40px] bg-white top-[150px] hidden group-hover:block",
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-[40px] text-center pb-[30px]">Cart</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {productsList.map((product) => {
          return (
            <div key={productsList.indexOf(product) + 1} className={stl.box}>
              <img className={stl.img} src={product.img} alt="" />
              <img className={stl.hovered_img} src={product.hover} alt="" />
              <button
                className={stl.btn}
                onClick={() => {
                  dispatch(deleteProduct(productsList.indexOf(product)));
                }}
              >
                Delete from Cart
              </button>
              <h1 className={stl.title}>{product.title}</h1>
              <p className={stl.price}>{product.price}$</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Card;
