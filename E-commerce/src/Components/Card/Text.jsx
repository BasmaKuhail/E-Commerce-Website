import styles from "./Card.module.css"
import Stars from "./Stars"

export default function Text({title, price, instedOf, rate, count}){
    return <ul className={styles.text}>
        <li className={styles.title}>
            {title}
        </li>
        <li className={styles.item}>
            <p className={styles.price}>${price}</p>
            <p className={styles.instedOf}>${instedOf}</p>
        </li>
        <ul className={styles.stars}>
            <li><Stars rate={rate}/></li>
            <li className={styles.rating}>{count}</li>
        </ul>
    </ul>
}
