import styles from "./Card.module.css"
import OfferBox from "./OfferBox"
import CardImg from "./CardImg"
import Icons from "./Icons"
import Text from "./Text"
import AddToCart from "./AddToCart"

export default function Card({offer, url, title, price, instedOf, rating}){
    return(
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <div className={styles.offerIcon}>
                    <OfferBox offer={offer}/>
                    <Icons/>
                </div>
                <CardImg url={url}/>
                <AddToCart/>
            </div>

            <div className={styles.titleContainer}>
                <Text title={title} price={price} instedOf ={instedOf} rating={rating} />
            </div>
        </div>
    )
}