import styles from "./MainImg.module.css"
import iphone from "../../assets/MainBody/iphone.png"
import MainBody1 from "../../assets/MainBody/MainBody1.png"
import MainBody2 from "../../assets/MainBody/MainBody2.png"
import { useState } from "react";

const items =[{
    img: MainBody1,
    icon: iphone,
    title: "iPhone 14 Series",
    text: "Up to 10% off Voucher"
    },
  {img: MainBody2,
    icon: iphone,
    title: "iPhone 17 Series",
    text: "Up to 15% off Voucher",
  },{
    img: MainBody1,
    icon: iphone,
    title: "iPhone 14 Series",
    text: "Up to 10% off Voucher"
    },
  {img: MainBody2,
    icon: iphone,
    title: "iPhone 17 Series",
    text: "Up to 15% off Voucher",
  },{
    img: MainBody1,
    icon: iphone,
    title: "iPhone 14 Series",
    text: "Up to 10% off Voucher"
    }
]

function Img({item}){
    return (<>
        <img className={styles.img} alt="device" src={item.img}/>
    </>)
}
export default function MainImg(){
    const [current, setCurrent] = useState(0);

    return(
        <div className={styles.mainDiv}>
            <div className={styles.vr}>
                <div className={styles.hz}>
                    <ul className={styles.textContent}>
                        
                        <li className={styles.item} id={styles.titleCont}>
                            <img className={styles.icon} alt="device" src={items[current].icon}/>
                            <p className={styles.title}>{items[current].title}</p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>{items[current].text}</p>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.shop} href="#">Shop Now</a>
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                    <Img item={items[current]}/>
                </div>
                {/* Slider Dots */}
                <div className={styles.slider}>
                {items.map((_, index) => (
                    <div
                    key={index}
                    className={styles.dot}
                    style={{
                        backgroundColor: current === index ? "var(--red)" : "var(--white)",
                        opacity: current === index ? 1 : 0.5,
                    }}
                    onClick={() => setCurrent(index)}
                    ></div>
                ))}
                </div>
            </div>
        </div>
    )
}