import styles from "./Card.module.css"
import Stars from "./Stars"

export default function Text({title, price, instedOf, rating}){
    return <ul className={styles.text}>
<<<<<<< HEAD
        <li className={styles.title}>
            {title}
=======
        <li className={styles.item}>
            <p className={styles.title}>{title}</p>
>>>>>>> 2d80842b6c2a348a35354747c5f8000d25e36efa
        </li>
        <li className={styles.item}>
            <p className={styles.price}>${price}</p>
            <p className={styles.instedOf}>${instedOf}</p>
        </li>
<<<<<<< HEAD
        <ul className={styles.stars}>
            <li><Stars/></li>
            <li className={styles.rating}>{rating}</li>
        </ul>
=======
        <div className={styles.stars}>
            <Stars/>
            <p className={styles.rating}>{rating}</p>
        </div>
>>>>>>> 2d80842b6c2a348a35354747c5f8000d25e36efa
    </ul>
}
