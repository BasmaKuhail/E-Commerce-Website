import styles from "./Button.module.css";

export default function Button({text, color}){
    return(
        <div className={styles.buttonContainer}>
            <button className={styles.button}>{text}</button>
        </div>
        
    ) 
}