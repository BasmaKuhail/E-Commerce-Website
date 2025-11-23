import styles from "./Card.module.css"
import { useCart } from "../Cart/CartContext"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function RemoveFromCart({product}){
    const { removeItem } = useCart();
    function removeFromCart(product){
        removeItem(product);
        toast("Product removed successfully!");
    }
    return(
        <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/cart">
            <div className={styles.add2cart} onClick={() => removeFromCart(product)}>
                <p className={styles.addText}>Remove From Cart</p>
            </div>
        </Link>
    )
}
