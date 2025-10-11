import styles from "./Card.module.css"
import OfferBox from "./OfferBox"
import CardImg from "./CardImg"
import Icons from "./Icons"
import Text from "./Text"
<<<<<<< HEAD
import AddToCart from "./AddToCart"

=======
>>>>>>> 2d80842b6c2a348a35354747c5f8000d25e36efa
export default function Card({offer, url, title, price, instedOf, rating}){
    return(
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <div className={styles.offerIcon}>
                    <OfferBox offer={offer}/>
                    <Icons/>
                </div>
<<<<<<< HEAD
                <CardImg url={url}/>
                <AddToCart/>
            </div>

=======
                
                <CardImg url={url}/>
                
            </div>
>>>>>>> 2d80842b6c2a348a35354747c5f8000d25e36efa
            <div className={styles.titleContainer}>
                <Text title={title} price={price} instedOf ={instedOf} rating={rating} />
            </div>
        </div>
    )
}