import styles from "./Category.module.css";
// icons
const data =[
    {text:"Phones", url:"src/assets/Categories/CellPhone.svg"},
    {text:"Computers", url:"src/assets/Categories/Computer.svg"},
    {text:"SmartWatch", url:"src/assets/Categories/SmartWatch.svg"},
    {text:"Camera", url:"src/assets/Categories/Camera.svg"},
    {text:"HeadPhones", url:"src/assets/Categories/HeadPhone.svg"},
    {text:"Gaming", url:"src/assets/Categories/Gamepad.svg"},
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
