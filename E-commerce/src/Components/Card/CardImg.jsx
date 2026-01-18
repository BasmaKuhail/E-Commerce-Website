import styles from "./Card.module.css"

export default function CardImg({image}){
    {console.log(image[1]?.imageURL)}
    return <img className={styles.img} src={`http://localhost:8080/image/file/${image[1]?.id}`} alt={image[1]?.altText}/>
}
