import styles from "./SignLog.module.css"

export default function Title({title}){
    return(<div className={styles.title}>
        <h1>{title}</h1>
        <p>Enter your details below</p>
    </div>)
}