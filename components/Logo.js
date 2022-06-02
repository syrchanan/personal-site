import styles from './logo.module.scss'

const Logo = () => {
    return(
        <img
            src="/wordmark.png"
            alt="Connor Hanan"
            className={styles.logo}
        />
    )
}

export default Logo