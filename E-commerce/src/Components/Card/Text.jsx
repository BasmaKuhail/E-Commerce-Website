import styles from "./Card.module.css"
import Stars from "./Stars"

export default function Text({title, price, instedOf, rating}){
    return <ul className={styles.text}>
        <li className={styles.item}>
            <p className={styles.title}>{title}</p>
        </li>
        <li className={styles.item}>
            <p className={styles.price}>${price}</p>
            <p className={styles.instedOf}>${instedOf}</p>
        </li>
        <div className={styles.stars}>
            <Stars/>
            <p className={styles.rating}>{rating}</p>
        </div>
    </ul>
}
