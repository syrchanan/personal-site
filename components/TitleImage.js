import styles from "./titleimage.module.scss"

const TitleImage = ({src, alt, dim}) => {
    if (dim === "tall") {
        return(
        
            <div className={styles.wrappertall}>
                <img
                    src={src}
                    alt={alt}
                    className={styles.imgtall}
                />
            </div>
            
        )
    } else if (dim === "wide") {
        return(
        
            <div className={styles.wrapperwide}>
                <img
                    src={src}
                    alt={alt}
                    className={styles.imgwide}
                />
            </div>
            
        )
    } else {
        return(
            <div>Please indicate if the title image is wide or tall.</div>
        )
    }
    
}

export default TitleImage