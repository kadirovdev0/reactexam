import { useContext } from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Invalid from "./components/Invalid";
import Navbar from "./components/Navbar";
import Sellers from "./components/Sellers";
import { UserContextApi } from "./context/userContext";

function App() {
  const { currentUser } = useContext(UserContextApi);
  console.log(currentUser);

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <Banner />
      <Category />
      <Sellers />
      <Footer />
      <Invalid />
    </div>
  );
}

export default App;
