import styles from "./Card.module.css"
import Stars from "./Stars"

export default function Text({title, price, instedOf, rating}){
    return <ul className={styles.text}>
        <li className={styles.title}>
            {title}
        </li>
        <li className={styles.item}>
            <p className={styles.price}>${price}</p>
            <p className={styles.instedOf}>${instedOf}</p>
        </li>
        <ul className={styles.stars}>
            <li><Stars/></li>
            <li className={styles.rating}>{rating}</li>
        </ul>
    </ul>
}
