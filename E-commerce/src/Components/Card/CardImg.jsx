import styles from "./Card.module.css"

export default function CardImg({image}){
    // {console.log(image)}
    return <img className={styles.img} src={image[0]?.imageURL} alt={image[0]?.altText}/>
}
