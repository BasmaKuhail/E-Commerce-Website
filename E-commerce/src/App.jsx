import { Routes, Route } from "react-router-dom";

import TopHead from "./Components/TopHead/TopHead"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

import SignUp from "./Components/SignUp/SignUp"
import HomePage from "./Components/HomePage";


function App() {

  return (<>
      <div className="sticky">
        <TopHead/>
        <Header withIcons={false}/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp title="Create an Account" sign={true} btntitle={"Create Account"}/>} />
        <Route path="/login" element={<SignUp title={"Login to Exclusive"} sign={false} btntitle={"Login"}/>} />
      </Routes>
      
      <Footer/>
    </>)
}

export default App
