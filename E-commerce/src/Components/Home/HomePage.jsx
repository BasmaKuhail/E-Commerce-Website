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

  console.log(tags)
  const { users } = useFetchUsers();
  console.log(products)
  
  function TagsSection({ tag, initialSeconds }){
    const { productsByTagName, loading, error } = useFetchProductsByTagName(tag.name);
      {if(productsByTagName.length == 0) return(<></>);}
      {if(tag.name == "New" || tag.name == "Best Seller") return(<></>);}
        return(<>
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex flex-wrap items-center gap-2 md:gap-24">
              <h1 className="font-poppins font-medium text-lg">{tag.name}</h1>
              <Timer initialSeconds={initialSeconds}/>
            </div> 
            <NextPrev/>          
          </div>
          
          <div className="flex flex-wrap gap-5 overflow-x-auto md:overflow-visible">
            {productsByTagName.map((product => <Link 
              key={product.id}
              state={{ product }} 
              className="flex-shrink-0"
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
          <hr className="my-8" />
        </>);
      }

  return(<div className="max-w-[1250px] mx-auto px-4 sm:px-6">

        <div className="flex flex-wrap md:flex-nowrap justify-between mb-24">
          <SideNav loggedin= {loggedin} isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)}/>
          <VrLine/>
          <MainImg/>
        </div>


        <Title title="Today's"/>
        {tags.length === 0 && <><p>Loading...</p><hr className="my-8" /></>}
        {tags.map(tag => (
          <TagsSection
            key={tag.id}
            tag={tag}
            initialSeconds={initialSeconds}
          />
        ))}
        <Title title="Categories"/>
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-poppins font-medium text-lg">Browse By Category</h1>
          <NextPrev/>
        </div>
        <Category/>
        
        <hr className="my-8" />

        {/* <Ad head="Categories" ad="Enhance Your Music Experience"/> */}
        <Title title="Our Products"/>
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-poppins font-medium text-lg">Explore Our Products</h1>
          <NextPrev/>
        </div>
        {products.length === 0 && <p>Loading...</p>}
        <div className="flex flex-wrap gap-5 justify-between">
          {products.map((product => 
            <Link 
              state={{ product }} 
              className="flex-shrink-0" 
              to="/pdp"
              key={product.id}
            > 
              <Card product = {product}/>
            </Link>
          ))}
        </div>
        {products.length === 0 ? <></> : <Link 
          state={{ title: "Our Products", filteredData:products }} 
          className="flex-shrink-0" 
          to="/products"
        >
          <Button color="red" text="View All Products"/>
        </Link>}
        <hr className="my-8" />

        <Title title="Featured"/>
        <h1 className="font-poppins font-medium text-lg">New Arrival</h1>
        <Arrivals/>
        <Ending/>
      </div>)
}