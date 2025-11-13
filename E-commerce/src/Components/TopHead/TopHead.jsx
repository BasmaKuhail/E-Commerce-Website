import styles from "./TopHead.module.css"
import { useState } from "react"

export default function TopHead(){


    const[opened, setOpned] = useState(false);
    function handleOpenLang() {
        setOpned(!opened);
    }
   
    return(
        <nav className={styles.topHead}>
            <div className={styles.container}>
            <ul className={styles.items}>
                <li className={styles.text}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</li>
                <li className={styles.link}>
                    <a className={styles.link} href="#">ShopNow</a>
                </li>
            </ul>
            <div className={styles.languge} >
                <ul className={styles.langugeTitle} onClick={handleOpenLang}>
                <li className={styles.text}>English</li>
                <li className={styles.dropDown}>
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white"/>
                    </svg>
                </li>
                {opened && <div className={styles.dropDowns}> 
                    <a href="#">Arabic</a> 
                </div>}
            </ul>
            </div>
            </div>
        </nav>
    )
}