import styles from "./Products.module.css"

import { Link, useLocation } from "react-router-dom";
import useFetchData from "../ProductsByCategory";
import Card from "../Card/Card";

export default function ProductsPage(){
    const location = useLocation();
    
    const {category} = location.state || {}; //get category from state
    const { data, loading, error } = useFetchData(category.id);
    console.log(data);
    {console.log(category.id)}
    
    // let { data: products} = useFetchData();
        
        //related items
    // products = products.filter((prdct) => prdct.category == category)

    return(<div  className="section-content" id={styles.container}>
        <div className={styles.cards}>
            {data.map((product => <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/pdp" state={{ product }}>
                <Card product = {product}/>
            </Link>))}
        </div>
        
        </div>)
}