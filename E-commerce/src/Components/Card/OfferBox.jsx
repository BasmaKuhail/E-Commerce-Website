import styles from "./Card.module.css"

export default function OfferBox({offer}){
    return <p className={styles.offer}>{offer}</p>
}
