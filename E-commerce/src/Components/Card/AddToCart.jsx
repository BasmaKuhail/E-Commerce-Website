import styles from "./Card.module.css"
import { useCart } from "../Cart/CartContext"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function AddToCart({product}){
    const { addItem } = useCart();

    function addToCart() {
        console.log("add to cart for product:", product);
        addItem(product); 
        toast("Product added to cart successfully!");
    }
    return(<>
        <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/cart">
            <div className={styles.add2cart} onClick={addToCart}>
                <p className={styles.addText}>Add To Cart</p>
                
            </div>
        </Link>

    </>)
}
