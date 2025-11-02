import styles from "./Ad.module.css";
import Speaker from "../../assets/Ad/Speaker.png"


import { useState, useEffect } from 'react';

function Timer({initialSeconds}){

    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

      useEffect(() => {
        if (secondsLeft <= 0) return;

        const timerId = setInterval(() => {
          setSecondsLeft(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timerId);
      }, [secondsLeft]);

      // Optional: Format the time for display
     

      const formatTime = (totalSeconds) => {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        return <div className={styles.timer}>
            <ul className={styles.item}>
                <li className={styles.itemText1}>{days}</li>
                <li className={styles.itemText2}>Days</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>{hours}</li>
                <li className={styles.itemText2}>Hours</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>{minutes}</li>
                <li className={styles.itemText2}>Minutes</li>
            </ul>
            <ul className={styles.item}>
                <li className={styles.itemText1}>{seconds}</li>
                <li className={styles.itemText2}>Seconds</li>
            </ul>
        </div>
        
      };

      return (
        <div>
          {secondsLeft > 0 ? (
            <>{formatTime(secondsLeft)}</>
          ) : (
            <h1>Countdown Finished!</h1>
          )}
        </div>
      );
}

export default function Ad({head, ad}){
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.head}>{head}</p>
                <p className={styles.ad}>{ad}</p>
                <Timer initialSeconds={500000}/>
                <button className={styles.button}>Buy Now!</button>
            </div>
            <div className={styles.imgcContainer}>
                <div className={styles.circleShadow}></div>
                <img className={styles.img} src={Speaker}/>
            </div>
        </div>
    )
}