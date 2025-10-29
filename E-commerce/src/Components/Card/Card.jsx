import styles from "./Card.module.css"
import OfferBox from "./OfferBox"
import CardImg from "./CardImg"
import Icons from "./Icons"
import Text from "./Text"
import AddToCart from "./AddToCart"

// import useFetchData from "../ProductList"



export default function Card({product}){


  
    return(
        <div className={styles.card}>
            {/* {console.log(product)} */}
            <div className={styles.imgContainer}>
                <div className={styles.offerIcon}>
                    <OfferBox offer="40%"/>
                    <Icons/>
                </div>
                <CardImg url={product.image}/>
                <AddToCart product={product}/>
            </div>

            <div className={styles.titleContainer}>
                <Text title={product.title} price={product.price} instedOf ="400" count={product.rating.count} rate={product.rating.rate}/>
            </div>
        </div>
    )
}