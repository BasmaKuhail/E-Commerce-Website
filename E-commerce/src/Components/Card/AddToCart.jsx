import styles from "./Card.module.css"
import { useCart } from "../Cart/CartContext"

export default function AddToCart({product}){
    const { addItem } = useCart();

    function addToCart() {
        console.log("add to cart for product:", product);
        addItem(product); 
    }
    return(
        <div className={styles.add2cart} onClick={addToCart}>
            <p className={styles.addText}>Add To Cart</p>
        </div>
    )
}
