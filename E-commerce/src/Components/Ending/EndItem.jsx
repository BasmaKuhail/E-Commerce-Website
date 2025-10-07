import styles from "./Ending.module.css";

export default function EndingItem({icon, title, text}){
    return(<ul className={styles.items}>
        <li  className={styles.imgContainer}>
            <img src={icon}/>
        </li>
        <li className={styles.title}>{title}</li>
        <li className={styles.text}>{text}</li>
    </ul>
    )
}