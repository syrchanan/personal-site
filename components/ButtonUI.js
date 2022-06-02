import styles from './buttonui.module.scss'
import Image from 'next/image'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const ButtonUI = ({ icon, color, clickHandler}) => {
    let btnClasses = cx({
        btnui : true,
        [`${icon}`] : icon
    })

    return(
        <button className={btnClasses}
            onClick={clickHandler}>
            <Image
                src={`/btns/icon-${icon}-${color}.svg`}
                alt={`${color} ${icon} icon`}
                width="50"
                height="50"
            />
        </button>
    )
}

export default ButtonUI