import Path from "../About/Path";
import styles from "./Checkout.module.css"

import card1 from "../../assets/Card/card1.png"
import card7 from "../../assets/Card/card7.png"

import bkash from "../../assets/Checkout/bkash.png"
import chiness from "../../assets/Checkout/chiness.png"
import visa from "../../assets/Checkout/visa.png"
import MasterCard from "../../assets/Checkout/MasterCard.png"
import Button from "../Button/Button";

const payMethod = [bkash, chiness, visa, MasterCard]
const cartItems =[{img: card1,
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
    .reduce((sum, item) => sum + item.price * item.quantity, 0);


export default function({shipping}){
    return(<div className="section-content" id={styles.checkoutContainer}>
        <Path/>
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <h1>Billing Details</h1>
                <form className={styles.formData}>
                    <lable className={styles.lbl} id="fname">First Name*</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="fname"/>

                    <lable className={styles.lbl} id="company">Company Name</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="company"/>

                    <lable className={styles.lbl} id="street">Street Address*</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="street"/>

                    <lable className={styles.lbl} id="opt">Apartment, floor, etc. (optional)</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="opt"/>

                    <lable className={styles.lbl} id="city">Town/City*</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="city"/>

                    <lable className={styles.lbl} id="phone">Phone Number*</lable>
                    <input className={styles.inpt} placeholder="" type="text" for="phone"/>

                    <lable className={styles.lbl} id="email">Email Address*</lable>
                    <input className={styles.inpt} placeholder="" type="email" for="email"/>

                    <div className={styles.save}>
                        <input className={styles.check} type="checkbox" name="save" id="save"/>
                        <p>Save this information for faster check-out next time</p>
                    </div>
                </form>
            </div>
            <div className={styles.cartData}>
                {cartItems.map((item) => <ul className={styles.row}>
                        <li className={styles.cell}>
                            <img className={styles.img} src={item.img}/>
                            {item.title}
                        </li>
                        <li className={styles.cell}>${(item.quantity * item.price)}</li>
                    </ul>)}
                    <ul className={styles.payingData}>
                        <li className={styles.item}>
                            <p>Subtotal:</p> ${total}
                        </li>
                        <hr className={styles.hr}/>
                        <li className={styles.item}>
                            <p>Shipping:</p>{shipping == 0 && "free"}
                            {shipping != 0 && {shipping}}
                        </li>
                        <hr className={styles.hr}/>
                        <li className={styles.item}>
                            <p>total:</p> ${total + shipping}
                        </li>
                    </ul>
                    <ul className={styles.payingMethod}>

                        <ul className={styles.payitems}>
                            <li className={styles.item}>
                                <input className={styles.radio} type="radio"/>
                                Bank
                            </li>
                            <li className={styles.item} id={styles.icons}>{payMethod.map((item => <img className={styles.img} src={item}/>))}</li>
                        </ul>
                        <ul className={styles.payitems}>
                            <li>
                                <input className={styles.radio} type="radio"/>
                                Cash on delivery
                            </li>
                        </ul>
                        

                        <div className={styles.copon}>
                            <input className={styles.coponInput} placeholder="Coupon Code" type="text"/>
                            <button className={styles.button}>Apply Coupon</button>
                        </div>
                        <div style={{display:"flex", alignItems:"flex-start"}}> 
                            <Button text="Place Order"/>
                        </div>
                    </ul>
            </div>
        </div>
        
    </div>)
}