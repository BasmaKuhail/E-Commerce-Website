import styles from "./Category.module.css";
import CellPhone from "../../assets/Categories/CellPhone.svg"
import Computer from "../../assets/Categories/Computer.svg"
import SmartWatch from "../../assets/Categories/SmartWatch.svg"
import Camera from "../../assets/Categories/Camera.svg"
import HeadPhones from "../../assets/Categories/HeadPhone.svg"
import Gamepad from "../../assets/Categories/Gamepad.svg"
// icons
const data =[
    {text:"Phones", url:CellPhone},
    {text:"Computers", url:Computer},
    {text:"SmartWatch", url:SmartWatch},
    {text:"Camera", url:Camera},
    {text:"HeadPhones", url:HeadPhones},
    {text:"Gaming", url:Gamepad},
]

export default function Category(){
    return(
        <div className={styles.Container}>
            {data.map((item => <div className={styles.category}>
                <img src={item.url}  className={styles.icon}/>
                <p className={styles.title}>{item.text}</p>
            </div>))}
            
        </div>
    )
}
