import Path from "../About/Path";
import styles from "./Product.module.css"

import product1 from "../../assets/ProductDetails/product1.png"
import product2 from "../../assets/ProductDetails/product2.png"
import product3 from "../../assets/ProductDetails/product3.png"
import product4 from "../../assets/ProductDetails/product4.png"
import product5 from "../../assets/ProductDetails/product5.png"

import delivery1 from "../../assets/ProductDetails/delivery1.svg"
import delivery2 from "../../assets/ProductDetails/delivery2.svg"

import BasicRating from "../Card/Stars";
import { useState } from "react";
import Card from "../Card/Card";
import Title from "../Title";
import { Link, useLocation } from "react-router-dom";
import useFetchData from "../ProductList";

const product ={
    images: [product2, product3, product4, product5],
    title:"Havic HV G-92 Gamepad",
    rating: 4,
    reviews: 150,
    inStock: true,
    price: 192.00,
    quantity: 2,
    about: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["blue", "pinck"],
    sizes: ["XS", "S", "M", "L", "XL"]
}
const sizes= ["XS", "S", "M", "L", "XL"]

const delivery = [
    {icon: delivery1,
        title: "Free Delivery",
        description: "Enter your postal code for Delivery Availability"
    },{icon: delivery2,
        title: "Return Delivery",
        description: "Free 30 Days Delivery Returns. Details"
    }
]
export default function ProductDetails(){
    const location = useLocation();
    const { product } = location.state || {}; //get product from state
    {console.log(product)}
    let { data: products} = useFetchData();
    
    //related items
    products = products.filter((prdct) => prdct.category == product.category)
    const [quantity, setQuantity] = useState(product.quantity || 1);

    function incraseHandler(){
        product.quantity = product.quantity +1;
        return setQuantity(quantity  + 1);
    }
    function decraseHandler(){
        if(quantity > 0){
            product.quantity = product.quantity -1;
            return setQuantity(quantity -1 );
        }else{
            product.quantity = 0;
            return setQuantity(0)
        }
    }
    function QuantityHandler(){
        return(<div className={styles.quantityContainer}>
            {console.log(quantity)}
            <ul className={styles.quantity} >
                <li onClick={incraseHandler} className={styles.quantityItem} id= {styles.plusMins}> + </li>
                <li className={styles.quantityItem} id= {styles.number}> {quantity} </li>
                <li onClick={decraseHandler} className={styles.quantityItem} id= {styles.plusMins}> - </li>
            </ul>
        </div>)
    }
    if (!product) {
        return <p>Product not found.</p>; // fallback in case user opens /pdp directly
    }
    return(<div id={styles.pageContainer} className="section-content" >

    <div id={styles.productContainer}>
        <div className={styles.otherImgs}>
            {[1,2,3].map((img => <img className={styles.smallImg} src={product.image}/>))} 
        </div>
        <div className={styles.mainImgContainer}>
            <img className={styles.mainImg} src={product.image}/>
        </div>
        <div className={styles.detailscontainer}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <h2>{product.title}</h2>
                </li>
                <li className={styles.item}>
                    <BasicRating rate={product.rating.rate}/>
                    <p className={styles.reviews}>({product.rating.count} Reviews)</p> 
                    <p className={styles.reviews}>| </p>
                    {(product.inStock)&& <p className={styles.inStock}>in Stock</p>}
                    {(!product.inStock)&& <p className={styles.outStock}>out Stock</p>}
                </li>
                <li className={styles.item} id={styles.price}>$ {product.price}</li>
                <li className={styles.item}>{product.about}</li>
                <hr className={styles.hr}/>

                <li className={styles.item}>Colors: 
                    {/* {product.colors.map((color => <input type="radio" styles= {{accentColor: `${color}`}} className={styles.color}/>))} */}
                </li>

                <li className={styles.item}>Sizes: 
                    {sizes.map((size => <button className={styles.size}>{size}</button>))} 
                </li>
                <li className={styles.item} id={styles.specialItem}>
                    <QuantityHandler/>
                    <button className={styles.btn}>Buy Now</button>
                    <button className={styles.love}>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </li>
            </ul>
            
            <div className={styles.delivery}>
                {delivery.map((item => <div className={styles.dliv}>
                    <img src={item.icon}/>
                    <div className={styles.text}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.desc}>{item.description}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
        <Title title="Related Item"/>
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
           {products.map((product => <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp">
                <Card product = {product}/>
            </Link>))}
        </div>
    
    </div> )
}
