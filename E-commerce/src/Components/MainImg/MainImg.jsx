import styles from "./MainImg.module.css"
import { useState, useEffect } from "react";
import { Line } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useFetchProductsByTagName from "../ProductByTagList";

// const items =[{
//     img: MainBody1,
//     icon: iphone,
//     title: "iPhone 14 Series",
//     text: "Up to 10% off Voucher"
//     },
//   {img: MainBody2,
//     icon: iphone,
//     title: "iPhone 17 Series",
//     text: "Up to 15% off Voucher",
//   },{
//     img: MainBody1,
//     icon: iphone,
//     title: "iPhone 14 Series",
//     text: "Up to 10% off Voucher"
//     },
//   {img: MainBody2,
//     icon: iphone,
//     title: "iPhone 17 Series",
//     text: "Up to 15% off Voucher",
//   },{
//     img: MainBody1,
//     icon: iphone,
//     title: "iPhone 14 Series",
//     text: "Up to 10% off Voucher"
//     }
//]

function Img({image}){
    return (<>
        <img className={styles.img} alt={image[0].altText} src={image[0].imageURL}/>
    </>)
}
export default function MainImg(){
    const [current, setCurrent] = useState(0);

    const { productsByTagName} = useFetchProductsByTagName("Best Seller");
    const [currentProduct, setCurrentProduct] = useState(null);
    useEffect(() => {
    if (productsByTagName && productsByTagName.length > 0) {
      setCurrentProduct(productsByTagName[0]);
      setCurrent(0); // reset current dot
    }
  }, [productsByTagName]);

    console.log(productsByTagName)
    {if(!productsByTagName) return(<div className={styles.mainDiv}>loading...</div>);} 
    return(
        <div className={styles.mainDiv}>
            <div className={styles.vr}>
                {currentProduct &&
                <div className={styles.hz}>
                    <ul className={styles.textContent}>
                        
                        <li className={styles.item} id={styles.titleCont}>
                            {currentProduct.description}
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>{currentProduct.productName}</p>
                        </li>
                        <Link state={{ currentProduct }} to={`/pdp`}>
                            <li className={styles.item}>
                                <a className={styles.shop} href="#">Shop Now</a>
                                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                            </li>
                        </Link>

                    </ul>
                    <Img image={currentProduct.images}/>
                </div>}
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
                    onClick={() => {
                        setCurrent(index); 
                        setCurrentProduct(productsByTagName[index]);
                    }}
                    ></div>
                ))}
                </div>
            </div>
        </div>
    )
}