import styles from "./SignLog.module.css"

export default function Button({title, onclick}){
    return <button onClick={onclick} className={styles.btn}>{title}</button>
}