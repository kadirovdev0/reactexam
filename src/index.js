import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { UserContextProvider } from "./context/userContext";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Card from "./Pages/Card";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="admin" element={<Admin />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Card />} />
              <Route path="*" element={<h1>Not Found 404</h1>} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
