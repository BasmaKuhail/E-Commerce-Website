import styles from "./Card.module.css"
import { useCart } from "../Cart/CartContext"
import { Link } from "react-router-dom";

export default function AddToCart({product}){
    const { addItem } = useCart();

    function addToCart() {
        console.log("add to cart for product:", product);
        addItem(product); 
    }
    return(
        <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/cart">
            <div className={styles.add2cart} onClick={addToCart}>
                <p className={styles.addText}>Add To Cart</p>
            </div>
        </Link>
    )
}
