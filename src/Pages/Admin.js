import React, { useContext } from "react";
import { UserContextApi } from "../context/userContext";
import { useISADMIN } from "../hooks/isAdmin";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import Navbar from "../components/Navbar";
function Admin() {
  const { currentUser } = useContext(UserContextApi);
  const { isAdmin } = useISADMIN(currentUser);
  // console.log(isAdmin)

  const AddProduct = (e) => {
    e.preventDefault();
    console.log(e);
    let img = e.target[0].value;
    let hover = e.target[1].value;
    let title = e.target[2].value;
    let price = e.target[3].value;

    addDoc(collection(db, "products"), {
      title,
      price,
      img,
      hover,
    });
    alert("Product is downloading!");
  };

  let stl = {
    size: "w-full h-[100vh]",
    container:
      "w-[90%] h-[50%] flex p-[50px]  flex-col items-center justify-around ml-[-250px] mt-[100px]",
    right: "border-[2px] w-[40%] border-black h-[40px] indent-[20px]",
    btn: "w-[140px] h-[40px] text-[18px] rounded-[50px] text-white font-semibold bg-black ml-[-350px]",
  };
  return (
    <div className={stl.size}>
      <Navbar />
      {isAdmin ? (
        <form onSubmit={AddProduct} className={stl.container} action="">
          <input
            className={stl.right}
            type="text"
            placeholder="Rasmga Linkni kiriting ..."
            name=""
            id=""
          />
          <input
            className={stl.right}
            type="text"
            placeholder="Hover rasmga Linkni kiriting ..."
            name=""
            id=""
          />
          <input
            className={stl.right}
            type="text"
            placeholder="Mahsulot nomini kirting"
          />
          <input
            className={stl.right}
            type="number"
            placeholder="Mahsulot narxini kiriting"
          />
          <button className={stl.btn}>Create</button>
          <img className=" absolute mt-[-30px] ml-[1500px]" src="https://d3k81ch9hvuctc.cloudfront.net/company/Ppe2rM/images/6bc03d5b-0eca-4bee-a797-4f9463283894.png" alt="" />

        </form>
      ) : (
        <h1> Siz admin emassiz</h1>
      )}

    </div>
  );
}

export default Admin;
