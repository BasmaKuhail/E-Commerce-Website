import styles from "./Card.module.css"

export default function CardImg({url}){
    return <img className={styles.img} src={url} alt="device"/>
}
