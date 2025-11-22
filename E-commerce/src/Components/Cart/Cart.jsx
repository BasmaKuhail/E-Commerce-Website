import Path from "../About/Path";
import styles from "./Cart.module.css"
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import cancle from "../../assets/Cart/cancle.svg"

const headerrow =["Product", "Price", "Quantity" ,"Subtotal"];



function Btn ({title}){
    return(<button className={styles.button}>
        {title}
    </button>)
}


function TbRow(){
    const { cartItems, removeItem } = useCart();
    return(<div className={styles.tbContent}>
        <ul className={styles.row}>
            {headerrow.map((cell => <li className={styles.cell}>{cell}</li>))}
        </ul>

        {cartItems.map((item) => <ul key={item.id} className={styles.row}>
            <li className={styles.cell}>
                <img onClick={() => removeItem(item)} className={styles.cancle} src={cancle}/>
                <img className={styles.img} src={item.images[0]}/>
                {item.title}
            </li>
            <li className={styles.cell}>${item.price}</li>
            <li className={styles.cell}>{item.quantity}</li>
            <li className={styles.cell}>${(item.quantity * item.price)}</li>
        </ul>)}
        
    </div>)
}

export default function Cart({shipping = 0}){
    const { cartTotal } = useCart();
    const finalTotal = cartTotal + shipping;

    return(<div className="section-content" id={styles.cartContainer}>
        <Path/>
        <div className={styles.tableContent}>
            <TbRow/>
        </div>
        <div className={styles.btns}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><Btn title="Return To Shop"/></Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><Btn title="Update Cart"/></Link>
            
        </div>
        <div className={styles.payingContainer}>
            <div className={styles.copon}>
                <input className={styles.inpt} placeholder="Coupon Code" type="text"/>
                <Button text="Apply Coupon"/>
            </div>
            <div className={styles.total}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <h2>Cart Total</h2>
                    </li>
                    <li className={styles.item}>
                        <p>Subtotal:</p> ${cartTotal}
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.item}>
                        {shipping == 0 && "free"}
                        {shipping != 0 && {shipping}}
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.item}>
                        <p>total:</p> ${finalTotal}
                    </li>
                </ul>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/checkout"><Button text="Procees to checkout"/></Link>
            </div>
        </div>
    </div>)
}