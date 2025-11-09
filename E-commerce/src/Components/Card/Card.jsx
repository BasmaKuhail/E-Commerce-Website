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
                    <OfferBox offer={product.discountPercentage}/>
                    <Icons/>
                </div>
                <CardImg url={product.images[0]}/>
                <AddToCart product={product}/>
            </div>

            <div className={styles.titleContainer}>
                <Text title={product.title} price={product.price} instedOf ="400" rate={product.rating}/>
                {console.log(product.rating)}
            </div>
        </div>
    )
}