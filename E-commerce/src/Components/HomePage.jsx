import { Link } from "react-router-dom";

import Button from "./Button/Button";
import Card from "./Card/Card";
import MainImg from "./MainImg/MainImg";
import NextPrev from "./NextPrev/NextPrev";
import SideNav from "./SideNav/SideNav";
import Timer from "./Timer/Timer";
import Title from "./Title";
import VrLine from "./VrLine";
import Ad from "./Ad/Ad";


// card imges
import card1 from "../assets/Card/card1.png"
import card2 from "../assets/Card/card2.png"
import card3 from "../assets/Card/card3.png"
import card4 from "../assets/Card/card4.png"
import card5 from "../assets/Card/card5.png"
import card6 from "../assets/Card/card6.png"
import card7 from "../assets/Card/card7.png"
import Arrivals from "./Arrivals/Arrival";
import Ending from "./Ending/Ending";
import Category from "./Category/Category";

import useFetchData from "./ProductList";
import { useRef } from "react";
export default function HomePage({initialSeconds}){

  const { data: products, loading, error } = useFetchData();
  
      // if (loading) return <p>Loading...</p>;
      // if (error) return <p>Error loading products</p>;
    
  console.log(products)
  return(<div className="section-content">

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom:"100px"}}>
          <SideNav />
          <VrLine/>
          <MainImg/>
        </div>
        <Title title="Today's"/>
        <div style={{display: "flex", justifyContent:"space-between", marginBottom:"30px"}}>
          <div style={{display: "flex",gap:"100px"}}>
            <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
            <Timer initialSeconds={initialSeconds}/>
          </div> 
          <NextPrev/>
        </div>
        
        <div className="cards">
          {products.map((product => <Link 
            style={{ color: 'inherit', textDecoration: 'inherit'}} 
            to="/pdp"
            explore>

              <Card product = {product}/>
            </Link>))}
        </div>
        <Button color="red" text="View All Products"/>
        <hr/>
        <Title title="Categories"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Browse By Category</h1>
          <NextPrev/>
        </div>

       
          <Category/>
        
        <hr/>
        
        <Title title="This Month"/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Best Selling Products</h1>
          <Button color="red" text="View All"/>
        </div>
        <div className="cards">
          {products.map((product => <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp">
              <Card product = {product}/>
            </Link>))}
        </div>


        <Ad head="Categories" ad="Enhance Your Music Experience"/>
        <Title title="Our Products"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Explore Our Products</h1>
          <NextPrev/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
          {products.map((product => <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp">
              <Card product = {product}/>
            </Link>))}
        </div>
        <Button color="red" text="View All Products"/>

        <Title title="Featured"/>
        <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>New Arrival</h1>
        <Arrivals/>
        <Ending/>
      </div>)
}