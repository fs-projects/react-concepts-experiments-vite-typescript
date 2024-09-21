import React from "react";
import styles from "./dancingLight.module.css";

const DancingLights = () => {
    return (
        <>
            <div className={styles.head}>Dancing Lights</div>
            <div className={styles.container}>
                <div className={styles.setOne}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={`${styles.setOne} ${styles.setTwo}`}>
                    <div className={`${styles.box}`}></div>
                    <div className={`${styles.box}`}></div>
                </div>
                <div className={styles.setOne}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
            </div>
        </>
    )
}

export default DancingLights;