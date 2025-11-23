import { Routes, Route } from "react-router-dom";

import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

import SignUp from "./Components/SignUp/SignUp"
import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { useRef, useState } from "react";
import ProductsPage from "./Components/Products/Products";
import Login from "./Components/SignUp/Login";
import { ToastContainer } from "react-toastify";


function App() {

const timeLeft = useRef(30000);
const [isSideNavOpen, setIsSideNavOpen] = useState(false);

const [loggedin, setLoggedin] = useState(false);
  return (<>
      <div className="sticky">
        <TopHead/>
        <Header setLoggedin={setLoggedin} loggedin ={loggedin} onMenuClick={() => setIsSideNavOpen(prev => !prev)}/>
      </div>
      <Routes>
        <Route path="/" element={
          <HomePage
            initialSeconds={timeLeft.current}
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen} 
            loggedin={loggedin}/>}
        />
        <Route path="/signup" element={<SignUp title="Create an Account" btntitle={"Create Account"}/>} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} title={"Login to Exclusive"}  btntitle={"Login"}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart shipping={0} />} />
        <Route path="/checkout" element={<Checkout shipping={0}/>} />
        <Route path="/pdp" element={<ProductDetails/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
      <ToastContainer position="top-left" autoClose={1500}/>

      <Footer/>
    </>)
}

export default App
