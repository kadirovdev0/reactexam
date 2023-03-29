import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const stl = {
    size: "w-full h-[92vh] font-['Montserrat'] flex items-center lg:flex-row flex-col justify-center  lg:pl-[200px] bg-[#F9F9F9]",
    h1: "text-[50px] text-[#565656] font-[800] lg:w-[300px] leading-[1.2] lg:text-left text-center",
    menu: "lg:w-[50%] w-full items-center lg:items-start flex flex-col mt-[200px] lg:mt-0",
    input: "lg:w-[400px] w-[70%] h-[50px] bg-[#E7E7E7] mb-[30px] indent-[20px]",
    btn: "w-[100px] h-[50px] bg-[#565656] text-white font-[700] text-[12px] hover:bg-white hover:text-[#565656] duration-300 border-[1px] border-[#565656]",
    ul: "lg:ml-[30px] mt-[20px] lg:mt-0",
    forgot:
      "text-[#565656] underline decoration-dotted text-[15px] font-[600] cursor-pointer hover:text-blue-600 hover:decoration-blue-600 duration-300 !opacity-100",
  };
  return (
    <div>
      <Navbar />
      <div className={stl.size}>
        <div className="lg:w-[50%] w-full">
          <h1 className={stl.h1}>Customer Login</h1>
        </div>
        <form onSubmit={login} className={stl.menu}>
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
            <button className={stl.btn}>SIGN IN</button>
            <ul className={stl.ul}>
              <li className={stl.forgot}>Forgot your password?</li>
              <li className={stl.span}>
                New Customer?
                <span className={stl.forgot}>
                  <Link to="/register">Sign up</Link>
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
