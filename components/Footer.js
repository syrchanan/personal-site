import Col from './Col'
import Container from "./Container"
import Heading from './Heading'
import Row from './Row'
import styles from "./footer.module.scss"
import Paragraph from './Paragraph'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.bar}/>
                <Row alignItems="center" justifyContent='center'>
                    <Col xs="12" md="3" alignItems='center' textAlign='center'>
                        <Heading level="4" marginBottom="1">
                            Phone
                        </Heading>
                        <Paragraph>
                            (760)-331-3331
                        </Paragraph>
                    </Col>
                    <Col xs="12" md="3" alignItems='center' textAlign='center'>
                        <Heading level="4" marginBottom="1">
                            Email
                        </Heading>
                        <Paragraph>
                            <Link legacyBehavior href="mailto:connorhanan4@gmail.com">
                                <a className={styles.link}>
                                    connorhanan4@gmail.com
                                </a>
                            </Link>
                        </Paragraph>
                    </Col>
                    <Col xs="12" md="3" alignItems='center' textAlign='center'>
                        <Row>
                            <Heading level="4" marginBottom="1">
                                Follow Me
                            </Heading>
                        </Row>
                        <Row>
                            <Col flexDirection='row' justifyContent='space-between' alignItems='center' textAlign='center'>
                                <Link legacyBehavior href="https://www.linkedin.com/in/connorhanan">
                                    <a>
                                        <Image
                                            src="/li-bug.png"
                                            alt="LinkedIn Logo"
                                            width="40"
                                            height="34"
                                        />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="https://github.com/syrchanan">
                                    <a>
                                        <Image 
                                            src="/octocat-bug.png"
                                            alt="Github"
                                            width="32"
                                            height="32"
                                        />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="https://twitter.com/ConnorHanan">
                                    <a>
                                        <Image 
                                            src="/twitter-bug.png"
                                            alt="Twitter"
                                            width="32"
                                            height="32"
                                        />
                                    </a>
                                </Link>
                                <Link legacyBehavior href="https://syrchanan.quarto.pub">
                                    <a>
                                        <Image 
                                            src="/blog.png"
                                            alt="Monographs"
                                            width="32"
                                            height="32"
                                        />
                                    </a>
                                </Link>
                            </Col>
                            <Paragraph/>
                        </Row>
                    </Col>
                    <Col xs="12" md="3" alignItems='flex-end' textAlign='center'>
                        <Paragraph>
                            &copy; Connor Hanan 2022
                        </Paragraph>
                    </Col>
                </Row>     
            </Container>
        </footer>
    )
}

export default Footer