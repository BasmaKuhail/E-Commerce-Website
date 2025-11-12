import styles from "./Products.module.css"

import { Link, useLocation } from "react-router-dom";
import useFetchData from "../ProductList";
import Card from "../Card/Card";

export default function ProductsPage(){
    const location = useLocation();
    const { category } = location.state || {}; //get category from state
    {console.log(category)}
    
    let { data: products} = useFetchData();
        
        //related items
    products = products.filter((prdct) => prdct.category == category)

    return(<div  className="section-content" id={styles.container}>
        <h1>{category}</h1>
        <div className={styles.cards}>
            {products.map((product => <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp" state={{ product }}>
                <Card product = {product}/>
            </Link>))}
        </div>
        
        </div>)
}