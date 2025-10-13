import styles from "./Timer.module.css"

export default function Timer(){
    return(
        <ul className={styles.TimeContainer}>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Days</li>
                    <li className={styles.item} id={styles.num}>03</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Hours</li>
                    <li className={styles.item} id={styles.num}>23</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Minutes</li>
                    <li className={styles.item} id={styles.num}>19</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Secends</li>
                    <li className={styles.item} id={styles.num}>56</li>
                </ul>
            </li>
        </ul>
    )
}