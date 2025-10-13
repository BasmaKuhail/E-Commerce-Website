import styles from "./Ad.module.css";
import Speaker from "../../assets/Ad/Speaker.png"

function Timer(){
    return(
        <div className={styles.timer}>
            <ul className={styles.item}>
                <li className={styles.itemText1}>23</li>
                <li className={styles.itemText2}>Days</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>53</li>
                <li className={styles.itemText2}>Hours</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>43</li>
                <li className={styles.itemText2}>Minutes</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>25</li>
                <li className={styles.itemText2}>Seconds</li>
            </ul>
        </div>
    )
}
export default function Ad({head, ad}){
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.head}>{head}</p>
                <p className={styles.ad}>{ad}</p>
                <Timer/>
                <button className={styles.button}>Buy Now!</button>
            </div>
            <div className={styles.imgcContainer}>
                <div className={styles.circleShadow}></div>
                <img className={styles.img} src={Speaker}/>
            </div>
        </div>
    )
}