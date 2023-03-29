import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Product from "../components/Product";
import Sellers from "../components/Sellers.js"

const Products = () => {
  const [document, setDocument] = useState([]);
  console.log(document);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          setDocument(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        },
        (error) => {
          console.log(error);
        }
      );
    };
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0001/5211/collections/PK-D-PLP-BFCM_2400x.jpg?v=1668549848')",
        }}
        className="w-full h-[200px] bg-cover flex items-center justify-center font-['Montserrat'] bg-no-repeat"
      >
        <div className="bg-[#F6EDE6] absolute w-full h-[400px] mt-[600px] ">
          <h1 className="text-[40px] absolute font-semibold font-bold ml-[50px] mt-[100px]">Shop All</h1>

          <p className="absolute mt-[180px] font-semibold font-bold ml-[50px]">From desk to dinner table, our range of fun, functional stationeryand home <p></p> goods brings art and design into your every day</p>
          <img className="w-[45%] h-[400px]  h-[600px] object-cover absolute ml-[835px]  " src="https://cdn.shopify.com/s/files/1/0001/5211/files/PK-Collection_Header-Shop_All_39b12ee5-ff1d-4b2c-ba3b-2a94dd08e6c6.jpg?v=1679914543&width=720" alt="" />
        </div>
        <h1 className="text-white text-[40px] font-[600] text-center">
          30% Off Everything!
        </h1>
      </div>
      <div className="w-full h-fit oveflow-hidden lg:h-[880px] grid grid-cols-2 lg:grid-cols-4 bg-[#F9F9F9] font-['Montserrat']">
        {document.map((product) => (
          <Product product={product.data} key={product.id} />
        ))}
      </div>
      <Sellers />
      <Sellers />
      <Sellers />
      <Sellers />
      <Sellers />
      <Sellers />
      <Sellers />
      <Sellers />
      <Footer />
    </div>
  );
};

export default Products;
