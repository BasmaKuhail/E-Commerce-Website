import Path from "../About/Path";
import styles from "./Cart.module.css"

import card1 from "../../assets/Card/card1.png"
import card7 from "../../assets/Card/card7.png"
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cartItems =[ ["Product", "Price", "Quantity" ,"Subtotal"],
{img: card1,
        title: "LCD Monitor",
        price: 650,
        quantity: 1,
    },
    {img: card7,
        title: "H1 Gamepad",
        price: 550,
        quantity: 2,
    },
]

const total = cartItems
    .slice(1) // skip the header row
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

function Btn ({title}){
    return(<button className={styles.button}>
        {title}
    </button>)
}
export default function Cart({shipping}){

function TbRow(){
    return(<div className={styles.tbContent}>
        {cartItems.map((item,index) => <>
        {(index == 0) && <ul className={styles.row}>
            {item.map((cell => <li className={styles.cell}>{cell}</li>))}
        </ul>}
        {(index > 0) && <ul className={styles.row}>
            <li className={styles.cell}>
                <img className={styles.img} src={item.img}/>
                {item.title}
            </li>
            <li className={styles.cell}>${item.price}</li>
            <li className={styles.cell}>{item.quantity}</li>
            <li className={styles.cell}>${(item.quantity * item.price)}</li>
        </ul>}</>)}
        
    </div>)
}

    
    return(<div className="section-content" id={styles.cartContainer}>
        <Path/>
        <div className={styles.tableContent}>
            <TbRow/>
        </div>
        <div className={styles.btns}>
            <Btn title="Return To Shop"/>
            <Btn title="Update Cart"/>
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
                        <p>Subtotal:</p> ${total}
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.item}>
                        {shipping == 0 && "free"}
                        {shipping != 0 && {shipping}}
                    </li>
                    <hr className={styles.hr}/>
                    <li className={styles.item}>
                        <p>total:</p> ${total + shipping}
                    </li>
                </ul>
                <Link to="/checkout"><Button text="Procees to checkout"/></Link>
            </div>
        </div>
    </div>)
}