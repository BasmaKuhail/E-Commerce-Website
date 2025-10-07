import styles from "./NextPrev.module.css";
import Next from "../../assets/NextPrev/next.svg"
import Prev from "../../assets/NextPrev/prev.svg"
export default function NextPrev(){
    return(
        <ul className={styles.container}>
            <li className={styles.item}>
                <img src={Prev}/>
            </li>
            <li className={styles.item}>
                <img src={Next}/>
            </li>
        </ul>  
    )
}