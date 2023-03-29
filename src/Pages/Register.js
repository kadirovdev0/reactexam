import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const auth = getAuth(app);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const login = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: displayName,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const stl = {
    size: "w-full h-[92vh] font-['Montserrat'] flex items-center lg:flex-row flex-col justify-center  lg:pl-[200px] bg-[#F9F9F9]",
    h1: "text-[50px] text-[#565656] font-[800] lg:w-[300px] leading-[1.2] lg:text-left text-center",
    menu: "lg:w-[50%] w-full items-center lg:items-start flex flex-col mt-[200px] lg:mt-0",
    input: "lg:w-[400px] w-[70%] h-[50px] bg-[#E7E7E7] mb-[30px] indent-[20px]",
    btn: "w-[100px] h-[50px] bg-[#565656] text-white font-[700] text-[12px] hover:bg-white hover:text-[#565656] duration-300 border-[1px] border-[#565656]",
    input2:
      "lg:w-[190px] w-[70%] h-[50px] bg-[#E7E7E7] mb-[30px] indent-[20px]",
  };
  return (
    <div>
      <Navbar />
      <div className={stl.size}>
        <div className="lg:w-[50%] w-full">
          <h1 className={stl.h1}>Create Account</h1>
        </div>
        <form onSubmit={login} className={stl.menu}>
          <ul className="flex lg:flex-row flex-col items-center justify-between w-full lg:w-[400px]">
            <input
              className={stl.input2}
              type="text"
              placeholder="First Name"
              required={true}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input className={stl.input2} type="text" placeholder="Last Name" />
          </ul>
          <input
            className={stl.input}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={stl.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="lg:flex w-[70%] lg:w-fit">
            <button className={stl.btn}>CREATE</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
