import styles from "./Footer.module.css";
import send from "../../assets/Footer/send.svg"
import qr from "../../assets/Footer/Qrcode.png"
import play from "../../assets/Footer/googlePlay.png"
import apple from "../../assets/Footer/appStore.png"

import facebook from "../../assets/Footer/facebook.svg"
import instegram from "../../assets/Footer/instegram.svg"
import twitter from "../../assets/Footer/twitter.svg"
import linkedin from "../../assets/Footer/linkedin.svg"
import { Link } from "react-router-dom";



const allItems = [
    {head:"Exclusive",
        title: "Subscribe",
        items: [{title: "Get 10% off your first order"}],
        input: "Enter your email"},

    {title:"Support",
    items: [{title: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."},
            {title: "exclusive@gmail.com"},
            {title: "+888015-88888-9999"}
        ]},
    {title: "Account",
    items: [{title:"My Account", to:"/account"},
            {title: "Login",to: "/login"},
            {title:"Register",to: "/signup"},
            {title: "Cart", to: "/cart"},
            {title:"Wishlist", to:"/wishlist"},
            {title:"Shop", to:"/"}
        ]},
    {title: "QuickLink",
    items:[{title: "Privacy Policy", to:"/"},
            {title: "Terms Of Use", to:"/"},
            {title: "FAQ", to:"/"},
            {title: "Contacts", to:"/contact"}]},
    {title:"Download App",
    text:"Save $3 with App New User Only",
    logos: [facebook, instegram,twitter, linkedin]
    }
    
]
function Group({head, title, arrayOFItems, input, text, logos}){
    return(
        <ul className={styles.items}>
            <li><h2>{head}</h2></li>
            <li className={styles.itemLi} id={styles.title}>{title}</li>
            {/* links */}
            {arrayOFItems && arrayOFItems.map((item => 
                <li className={styles.itemLi} id={styles.item}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={item.to}>
                        {item.title}
                    </Link>
                </li>))}

            {/* input */}
            {input&& <li className={styles.itemLi} id={styles.inputData}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} placeholder={input} />
                    <img src={send} alt="send" className={styles.sendIcon} />
                </div>
            </li>}

            {/* last group only */}
            {text  && <li className={styles.itemLi} id={styles.p}>{text}</li>}
            {logos && <li className={styles.itemLi} id={styles.imgs}>
                <img src={qr}/>
                <div className={styles.apps}>
                    <img src={play}/>
                    <img src={apple}/>
                    </div>
            </li>}
                        
            {/* follow us on */}
            {logos && <li className={styles.itemLi}>
                <div className={styles.logos}>
                    {logos.map((item => <img src={item}/>))}
                </div>
            </li>}
        </ul>
    )
}
export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.sectionContent}>
                <div className={styles.firstCol}>
                    
                </div>
                <div className={styles.group}>
                    {allItems.map((item => <Group head={item.head} title={item.title} arrayOFItems={item.items} input={item.input} text={item.text} logos={item.logos}/>))}     
                </div>
            </div>
            <div className={styles.copyRight}>
                <p className={styles.copyText}> &copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}
