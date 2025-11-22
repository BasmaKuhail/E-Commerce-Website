import styles from "./Card.module.css"
import { useCart } from "../Cart/CartContext"
import { Link } from "react-router-dom";

export default function RemoveFromCart({product}){
    const { removeItem } = useCart();

    return(
        <Link state={{ product }} style={{ color: 'inherit', textDecoration: 'inherit'}} to="/cart">
            <div className={styles.add2cart} onClick={() => removeItem(product)}>
                <p className={styles.addText}>Remove From Cart</p>
            </div>
        </Link>
    )
}
