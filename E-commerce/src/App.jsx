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
import useFetchUsers from "./Components/UsersList";
import Login from "./Components/SignUp/Login";


function App() {
const { users } = useFetchUsers();
console.log(users)
const timeLeft = useRef(30000);
const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (<>
      <div className="sticky">
        <TopHead/>
        <Header withIcons={true} onMenuClick={() => setIsSideNavOpen(prev => !prev)}/>
      </div>
      <Routes>
        <Route path="/" element={
          <HomePage
            initialSeconds={timeLeft.current}
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen} />}
        />
        <Route path="/signup" element={<SignUp title="Create an Account" btntitle={"Create Account"}/>} />
        <Route path="/login" element={<Login title={"Login to Exclusive"}  btntitle={"Login"}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart shipping={0} />} />
        <Route path="/checkout" element={<Checkout shipping={0}/>} />
        <Route path="/pdp" element={<ProductDetails/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
      
      <Footer/>
    </>)
}

export default App
