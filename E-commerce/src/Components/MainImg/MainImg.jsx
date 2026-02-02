import styles from "./MainImg.module.css"
import iphone from "../../assets/MainBody/iphone.png"
import MainBody1 from "../../assets/MainBody/MainBody1.png"
import MainBody2 from "../../assets/MainBody/MainBody2.png"
import { useState } from "react";
import useFetchProductsByTagName from "../ProductsByTag";



function Img({image}){
    return (<>
        <img className={styles.img} src={image[0]?.imageURL} alt={image[0]?.altText}/>
    </>)
}
export default function MainImg(){
    const [current, setCurrent] = useState(0);
    const { productsByTagName} = useFetchProductsByTagName("Best Seller");
        
    console.log(productsByTagName)
    {if(!productsByTagName) return(<div className={styles.mainDiv}>loading...</div>);} 
    {if(productsByTagName) 
    return(
        <div className={styles.mainDiv}>
            <div className={styles.vr}>
                <div className={styles.hz}>
                    <ul className={styles.textContent}>
                        
                        <li className={styles.item} id={styles.titleCont}>
                            {productsByTagName[current].description}
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>{productsByTagName[current].productName}</p>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.shop} href="#">Shop Now</a>
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                    <Img image={productsByTagName[current].images}/>
                </div>
                {/* Slider Dots */}
                <div className={styles.slider}>
                {productsByTagName.map((_, index) => (
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
    )}
}