import styles from "./MainImg.module.css"

const items =[{
    img: "src/assets/MainBody/MainBody1.png",
    icon: "src/assets/MainBody/iphone.png",
    title: "iPhone 14 Series",
    text: "Up to 10% off Voucher"
    }
]

function Img({item}){
    return (<>
    {<img className={styles.img} alt="device" src={item.img}/>}
    </>)
}
export default function MainImg(){
    return(
        <div className={styles.mainDiv}>
            {items.map((item => 
            <div className={styles.vr}>
                <div className={styles.hz}>
                    <ul className={styles.textContent}>
                        <li className={styles.item} id={styles.titleCont}>
                            <img className={styles.icon} alt="device" src={item.icon}/>
                            <p className={styles.title}>{item.title}</p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.text}>{item.text}</p>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.shop} href="#">Shop Now</a>
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                    <Img item={item}/>
                </div>
                <div className={styles.slider}>
                    <p>next</p>
                </div>

            </div>
                
            ))}
        </div>
    )
}