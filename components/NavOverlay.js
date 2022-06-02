import Container from './Container'
import Nav from './Nav'
import styles from './navoverlay.module.scss'
import ButtonUI from './ButtonUI'
import Logo from './Logo'
import Col from './Col'
import Row from './Row'

const NavOverlay = ({clickHandler}) => {
    return(
        <div className={styles.navOverlay}>
            <Container>
                <Row justifyContent="center" alignItems="center">
                    <Col justifyContent='center' alignItems='center' marginBottom="2">
                        <Logo/>
                    </Col>
                </Row>
                <Row justifyContent="center" alignItems="center">
                    <Nav mobile flexDirection="column"/>
                    <ButtonUI icon="close" color="black"
                        clickHandler={() => {
                            clickHandler(false)
                        }}
                    />
                </Row>                
            </Container>
        </div>
    )
}

export default NavOverlay