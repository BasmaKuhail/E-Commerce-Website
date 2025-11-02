import styles from "./Timer.module.css"

import React, { useState, useEffect } from 'react';

export default function Timer({initialSeconds}){

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

        return <ul className={styles.TimeContainer}>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Days</li>
                    <li className={styles.item} id={styles.num}>{days}</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Hours</li>
                    <li className={styles.item} id={styles.num}>{hours}</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Minutes</li>
                    <li className={styles.item} id={styles.num}>{minutes}</li>
                </ul>
            </li>
            <li className={styles.col}>:</li>
            <li className={styles.group}>
                <ul className={styles.groupItems}>
                    <li className={styles.item} id={styles.head}>Secends</li>
                    <li className={styles.item} id={styles.num}>{seconds}</li>
                </ul>
            </li>
        </ul>
        
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