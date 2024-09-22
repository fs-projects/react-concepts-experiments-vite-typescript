import styles from './api-loader.module.css';
export const ApiLoader = () => {
    return (
        <div className={styles['lds-hourglass']}></div>
    )
}