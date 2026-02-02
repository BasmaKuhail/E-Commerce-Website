import { Link } from "react-router-dom";

import styles from "./Home.module.css"
import Button from "../Button/Button";
import Card from "../Card/Card";
import MainImg from "../MainImg/MainImg";
import NextPrev from "../NextPrev/NextPrev";
import SideNav from "../SideNav/SideNav";
import Timer from "../Timer/Timer";
import Title from "../Title";
import VrLine from "../VrLine";
import Ad from "../Ad/Ad";

import Arrivals from "../Arrivals/Arrival";
import Ending from "../Ending/Ending";
import Category from "../Category/Category";

import useFetchData from "../ProductList";
import useFetchUsers from "../UsersList";
import useFetchTags from "../TagList";
import useFetchProductsByTagName from "../ProductsByTag";
import { useEffect, useState } from "react";
import { s } from "framer-motion/client";

export default function HomePage({loggedin, initialSeconds, isSideNavOpen, setIsSideNavOpen }){
  console.log(loggedin)

  const { products} = useFetchData();
  const { tags } = useFetchTags();

  const { users } = useFetchUsers();
  console.log(products)
  
  function TagsSection({ tag, initialSeconds }){
    const { productsByTagName, loading, error } = useFetchProductsByTagName(tag.name);
      {if(productsByTagName.length == 0) return(<></>);}
      {if(tag.name == "New" || tag.name == "Best Seller") return(<></>);}
        return(<>
          <div className={styles.secendGroup}>
            <div className={styles.secendGroupInner}>
              <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>{tag.name}</h1>
              <Timer initialSeconds={initialSeconds}/>
            </div> 
            <NextPrev/>          
          </div>
          
          <div className="cards">
            {productsByTagName.map((product => <Link 
              state={{ product }} 
              style={{ color: 'inherit', textDecoration: 'inherit'}} 
              to="/pdp"
              explore>

                <Card product = {product}/>
              </Link>))}
          </div>
          {/* <Link 
            state={{ title: "Flash Sales", filteredData:bestDiscountProducts }} 
            style={{ color: 'inherit', textDecoration: 'inherit'}} 
            to="/products">
              <Button color="red" text="View All Products"/>
            </Link> */}
          <hr/>
        </>);
      }

  return(<div className="section-content">

        <div className={styles.firstGroup}>
          <SideNav loggedin= {loggedin} isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)}/>
          <VrLine/>
          <MainImg/>
        </div>
        <Title title="Today's"/>
        
        {tags.map(tag => (
          <TagsSection
            key={tag.id}
            tag={tag}
            initialSeconds={initialSeconds}
          />
        ))}
        <Title title="Categories"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Browse By Category</h1>
          <NextPrev/>
        </div>

       
          <Category/>
        
        <hr/>

        {/* <Ad head="Categories" ad="Enhance Your Music Experience"/> */}
        <Title title="Our Products"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Explore Our Products</h1>
          <NextPrev/>
        </div>
        <div className={styles.explore} style={{display:"flex", flexDirction: "row", justifyContent:"space-between", flexWrap:"wrap", gap:"20px"}}>
          {products.map((product => <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp">
              <Card product = {product}/>
            </Link>))}
        </div>
        <Link 
          state={{ title: "Our Products", filteredData:products }} 
          style={{ color: 'inherit', textDecoration: 'inherit'}} 
          to="/products"><Button color="red" text="View All Products"/></Link>

        <Title title="Featured"/>
        <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>New Arrival</h1>
        <Arrivals/>
        <Ending/>
      </div>)
}