import styles from "./Arrival.module.css";

import PlayStation from "../../assets/Arrivals/PlayStation.png"
import woman from "../../assets/Arrivals/woman.png"
import Speakers from "../../assets/Arrivals/Speakers.png"
import Perfume from "../../assets/Arrivals/Perfume.png"

const data =[
    { url:PlayStation,
        title:"PlayStation 5",
        text:"Black and White version of the PS5 coming out on sale."
    },
    { url:woman,
        title:"Women's Collections",
        text:"Featured woman collections that give you another vibe"
    },
    { url:Speakers,
        title:"Speakers",
        text:"amazon wireless speakers"
    },
    { url:Perfume,
        title:"Perfume",
        text:"GUCCI INTENSE OUD EDP"
    },
]
function ArrivalText({title, text}){
    return(
        <ul className={styles.items}>
            <li className={styles.title}>{title}</li>
            <li className={styles.text}>{text}</li>
            <li className={styles.shop}><a href="#">Shop Now</a></li>
        </ul>
    )
}
export default function Arrivals(){
    return(
            <div className={styles.arrivals}>
                {data.map((item,index) =>
                    <div key={index}
                        className={`${styles["arrivals" + (index + 1)]}`}
                    >
                    <img className={styles.img} src={item.url}/>
                    <ArrivalText title={item.title} text={item.text}/>
                </div>
                )}
                
            </div>
    )}
    