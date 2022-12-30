import Col from "../components/Col"
import Container from "../components/Container"
import Heading from "../components/Heading"
import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import Row from "../components/Row"
import TitleImage from "../components/TitleImage"
import Link from "next/link"
import Head from 'next/head'

const ContactPage = () => {
    return(
        <Layout>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/icon.png"/>
            </Head>
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="6" justifyContent="center" alignItems="center" textAlign="center">
                        <Heading level="1" marginBottom="2">Contact</Heading>
                        <Paragraph intro marginBottom="4">
                            I am looking forward to hearing from you! Please do not hesitate to reach out if you have any questions.
                        </Paragraph>
                        <Row>
                            <Col xs="12" sm="6" textAlign="center" alignItems="center" justifyContent="center">
                                <Heading level="2" marginBottom="1" marginTop="1">
                                    Phone
                                </Heading>
                                <Paragraph marginBottom="4">
                                    (760)-331-3331
                                </Paragraph>
                            </Col>
                            <Col xs="12" sm="6" textAlign="center" alignItems="center" justifyContent="center">
                                <Heading level="2" marginBottom="1" marginTop="1">
                                    Email
                                </Heading>
                                <Paragraph marginBottom="4">
                                    <Link legacyBehavior href="mailto:connorhanan4@gmail.com">
                                        <a>
                                            connorhanan4@gmail.com
                                        </a>
                                    </Link>
                                </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="6" justifyContent="center" alignItems="center">
                        <TitleImage src="/images/hanan_wide.jpg" alt="Connor Hanan" dim="wide"/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ContactPage