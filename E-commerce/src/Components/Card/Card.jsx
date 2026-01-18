import styles from "./Card.module.css"
import OfferBox from "./OfferBox"
import CardImg from "./CardImg"
import Icons from "./Icons"
import Text from "./Text"
import AddToCart from "./AddToCart"
import { useCart } from "../Cart/CartContext"
import RemoveFromCart from "./RemoveFromCart"

// import useFetchData from "../ProductList"



export default function Card({product}){

    const { cartItems } = useCart();

    function foundInCart(product){
        let itemFound = false;
        if(cartItems.find((item=> item.id == product.id))){
            itemFound = true
            return itemFound
        }
        return itemFound;
    }
    return(
        <div className={styles.card}>
            {/* {console.log(product)} */}
            <div className={styles.imgContainer}>
                <div className={styles.offerIcon}>
                    {(product.salePercentage != 0) &&   <OfferBox offer={product.salePercentage}/>}
                    <Icons/>
                </div>
                
                <CardImg image={product.images}/>
                
                {!foundInCart(product) && <AddToCart product={product}/>}
                {foundInCart(product) && <RemoveFromCart product={product}/>}
                
            </div>

            <div className={styles.titleContainer}>
                <Text title={product.productName} price={product.basePrice * (1 - product.salePercentage / 100)} instedOf ={product.basePrice} rate={product.rating}/>
            </div>
        </div>
    )
}