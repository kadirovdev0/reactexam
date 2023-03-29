import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productReducer";

const Product = ({ product }) => {
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
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.value);
  console.log(productsList);
  return (
    <div className={stl.box}>
      <span style={{ background: "#EF4043" }} className={stl.span}>
        Selling Fast
      </span>
      <img className={stl.img} src={product.img} alt="" />
      <img className={stl.hovered_img} src={product.hover} alt="" />
      <button
        className={stl.btn}
        onClick={() => {
          dispatch(addProduct({ product }));
        }}
      >
        Add to cart
      </button>
      <h1 className={stl.title}>{product.title}</h1>
      <p className={stl.price}>{product.price}$</p>

    </div>
  );
};

export default Product;
