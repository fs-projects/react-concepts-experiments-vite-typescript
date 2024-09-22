import styles from './global-loader.module.css';
export const GlobalLoader = () => {
    return (
        <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>
    )
}