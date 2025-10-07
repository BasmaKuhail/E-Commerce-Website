import styles from "./Ending.module.css";
import EndingItem from "./EndItem";

const data =[
    { url:"src/assets/EndingIcons/delivery.svg",
        title:"FREE AND FAST DELIVERY",
        text:"Free delivery for all orders over $140"
    },
    { url:"src/assets/EndingIcons/secure.svg",
        title:"24/7 CUSTOMER SERVICE",
        text:"Friendly 24/7 customer suppoet"
    },
    { url:"src/assets/EndingIcons/service.svg",
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