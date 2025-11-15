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

export default function HomePage({loggedin, initialSeconds, isSideNavOpen, setIsSideNavOpen }){
  console.log(loggedin)
  const { data: products, loading, error } = useFetchData();

  const bestRatingProsucts = products.filter((prdct) => prdct.rating > 4)
  const bestDiscountProducts = products.filter((prdct) => prdct.discountPercentage > 10)
  const { users } = useFetchUsers();
  console.log(users)

      // if (loading) return <p>Loading...</p>;
      // if (error) return <p>Error loading products</p>;
  // 1. New State for SideNav/Mobile Menu visibility
  return(<div className="section-content">

        <div className={styles.firstGroup}>
          <SideNav loggedin= {loggedin} isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)}/>
          <VrLine/>
          <MainImg/>
        </div>
        <Title title="Today's"/>
        <div className={styles.secendGroup}>
          <div className={styles.secendGroupInner}>
            <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Flash Sales</h1>
            <Timer initialSeconds={initialSeconds}/>
          </div> 
          <NextPrev/>          
        </div>
        
        <div className="cards">
          {bestDiscountProducts.map((product => <Link 
            state={{ product }} 
            style={{ color: 'inherit', textDecoration: 'inherit'}} 
            to="/pdp"
            explore>

              <Card product = {product}/>
            </Link>))}
        </div>
        <Link 
          state={{ title: "Flash Sales", filteredData:bestDiscountProducts }} 
          style={{ color: 'inherit', textDecoration: 'inherit'}} 
          to="/products">
            <Button color="red" text="View All Products"/>
          </Link>
        <hr/>
        <Title title="Categories"/>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Browse By Category</h1>
          <NextPrev/>
        </div>

       
          <Category/>
        
        <hr/>
        
        <Title title="This Month"/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
          <h1 style={{fontFamily: "var(--font-main)", fontWeight: "var(--meduim)"}}>Best Rating Products</h1>
          <Link state={{ title:"Best Rating Products", filteredData: bestRatingProsucts }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/products">
            <Button color="red" text="View All"/>
          </Link>
        </div>
        <div className="cards">
          {bestRatingProsucts.map((product => <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp">
              <Card product = {product}/>
            </Link>))}
        </div>


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