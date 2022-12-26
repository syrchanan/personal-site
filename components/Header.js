import Col from './Col'
import Container from './Container.js'
import Nav from './Nav'
import NavOverlay from './NavOverlay'
import Row from './Row.js'
import styles from './header.module.scss'
import { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import ButtonUI from './ButtonUI'

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)

    return(
        <header className={styles.header}>
            {isMenuVisible &&
                <NavOverlay clickHandler={setMenuVisible}/>
            }
            <Container>
                <Row justifyContent="space-between" alignItems="center">
                    <Col xs="8" sm="4">
                        <Link legacyBehavior href="/">
                            <a>
                                <Logo/>
                            </a>
                        </Link>
                    </Col>
                    <Col xs="4" sm="8" alignItems='flex-end'>
                        <Nav />
                        <ButtonUI icon="menu" color="black"
                            clickHandler={() => {
                                setMenuVisible(true)
                        }}/>
                    </Col>
                </Row>
                <div className={styles.bar}></div>
            </Container>
        </header>
    )
}

export default Header