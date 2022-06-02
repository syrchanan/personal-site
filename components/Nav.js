import classNames from 'classnames/bind';
import Link from 'next/link'
import styles from './nav.module.scss'

const navLinks = [
    {
        label: "Resume",
        slug: "resume"
    },
    {
        label: "Portfolio",
        slug: "portfolio"
    },
    {
        label: "Contact",
        slug: "contact"
    }
];

let cx = classNames.bind(styles)

const Nav = ({mobile, flexDirection}) => {
    let navClasses = cx({
        nav : true,
        mobile : mobile
    })

    let listClasses = cx({
        list : true,
        [`flex-direction-${flexDirection}`] : flexDirection
    })

    return( 
        <nav className={navClasses}>
            <ul className={listClasses}>
                {navLinks.map((navLink, index) => {
                    return(
                        <li key={index} className={styles.listItem}>
                            <Link href={`/${navLink.slug}`}>
                                <a className={styles.link}>
                                    {navLink.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav