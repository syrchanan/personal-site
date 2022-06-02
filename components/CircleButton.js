import styles from './circlebutton.module.scss'
import Link from 'next/link'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

const CircleButton = ({children, type}) => {

    let buttonClasses = cx({
        circle: true,
        first: type === "1",
        second: type === "2",
        third: type === "3"
    })

    return(
            <Link href={`/${children}`} >
                <a className={buttonClasses}>
                    {children}
                </a>
            </Link>
    )
}

export default CircleButton