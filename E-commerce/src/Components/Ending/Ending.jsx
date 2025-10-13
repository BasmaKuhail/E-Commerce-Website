import styles from "./Ending.module.css";
import EndingItem from "./EndItem";

import delivery from "../../assets/EndingIcons/delivery.svg"
import secure from "../../assets/EndingIcons/secure.svg"
import service from "../../assets/EndingIcons/service.svg"

const data =[
    { url:delivery,
        title:"FREE AND FAST DELIVERY",
        text:"Free delivery for all orders over $140"
    },
    { url:secure,
        title:"24/7 CUSTOMER SERVICE",
        text:"Friendly 24/7 customer suppoet"
    },
    { url:service,
        title:"MONEY BACK GUARANTEE",
        text:"We reurn money within 30 days"
    }
]


export default function Ending(){
    return(<div className={styles.groups}> 
    {data.map((item => <EndingItem icon={item.url} title={item.title} text={item.text}/>))}
    </div>
    )
}