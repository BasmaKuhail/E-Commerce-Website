import { Routes, Route } from "react-router-dom";

import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

import SignUp from "./Components/SignUp/SignUp"
import HomePage from "./Components/HomePage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { useRef } from "react";


function App() {
const timeLeft = useRef(30000);
  return (<>
      <div className="sticky">
        <TopHead/>
        <Header withIcons={true}/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage initialSeconds={timeLeft.current} />}/>
        <Route path="/signup" element={<SignUp title="Create an Account" sign={true} btntitle={"Create Account"}/>} />
        <Route path="/login" element={<SignUp title={"Login to Exclusive"} sign={false} btntitle={"Login"}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart shipping={0} />} />
        <Route path="/checkout" element={<Checkout shipping={0}/>} />
        <Route path="/pdp" element={<ProductDetails/>} />
      </Routes>
      
      <Footer/>
    </>)
}

export default App
