import Container from "../components/Container"
import Layout from "../components/Layout"
import Row from "../components/Row"
import Col from '../components/Col'
import Heading from '../components/Heading'
import { getMiningProjectReadme, getF1ProjectReadme, getAprioriProjectReadme, getAutoTVProjectReadme, getTernProjectReadme } from "./api/github"
import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/Section'

export async function getStaticProps() {
    const readmeF1 = await getF1ProjectReadme()
    const readmeMining = await getMiningProjectReadme()
    const readmeApriori = await getAprioriProjectReadme()
    const readmeAutoTV = await getAutoTVProjectReadme()
    const readmeTern = await getTernProjectReadme()

    const contentF1 = Buffer.from(readmeF1, 'base64').toString('ascii')
    const contentMining = Buffer.from(readmeMining, 'base64').toString('ascii')
    const contentApriori = Buffer.from(readmeApriori, 'base64').toString('ascii')
    const contentAutoTV = Buffer.from(readmeAutoTV, 'base64').toString('ascii')
    const contentTern = Buffer.from(readmeTern, 'base64').toString('ascii')

    return {
        props: {
            contentF1,
            contentMining,
            contentApriori,
            contentAutoTV,
            contentTern
        }
    }
}

const PortfolioPage = ({contentF1, contentMining, contentApriori, contentAutoTV, contentTern}) => {

    return(
        <Layout>
            <Container>
                <Row>
                    <Col sm="1"/>
                    <Col sm="10">
                        <Heading level="1" marginBottom="2">
                            Portfolio
                        </Heading>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" justifyContent="center" alignItems="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/data_viz_sem_project">
                            <a>
                                <Image
                                    src="/tidyverse-logo.png"
                                    alt="tidyverse"
                                    width="120"
                                    height="139"
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col sm="8" justifyContent="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/data_viz_sem_project">
                            <a>
                                <Heading level="2" marginTop="2">Formula 1 Analysis</Heading>
                            </a>
                        </Link>
                        <Section>
                            {contentF1}
                        </Section>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" justifyContent="center" alignItems="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/data_mining_sem_project">
                            <a>
                                <Image
                                    src="/mining.png"
                                    alt="neural network"
                                    width="166"
                                    height="151"
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col sm="8" justifyContent="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/data_mining_sem_project">
                            <a>
                                <Heading level="2" marginTop="2">Predictor-based Data Mining</Heading>
                            </a>
                        </Link>
                        <Section>
                            {contentMining}
                        </Section>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" justifyContent="center" alignItems="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/python_projects/data_analysis_sem_project">
                            <a>
                                <Image
                                    src="/nyserda-logo.png"
                                    alt="NYSERDA logo"
                                    width="150"
                                    height="150"
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col sm="8" justifyContent="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/python_projects/data_analysis_sem_project">
                            <a>
                                <Heading level="2" marginTop="2">Association Rules Mining</Heading>
                            </a>
                        </Link>
                        <Section>
                            {contentApriori}
                        </Section>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" justifyContent="center" alignItems="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/automated_television_ratings">
                            <a>
                                <Image
                                    src="/nielsen-logo.jpg"
                                    alt="The Nielsen Company"
                                    width="204"
                                    height="136"
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col sm="8" justifyContent="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/automated_television_ratings">
                            <a>
                                <Heading level="2" marginTop="2">Automated Web Scraping</Heading>
                            </a>
                        </Link>
                        <Section>
                            {contentAutoTV}
                        </Section>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4" justifyContent="center" alignItems="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/event_cvg_tern_plot">
                            <a>
                                <Image
                                    src="/GA_runoff_plot.svg"
                                    alt="GA Runoff Analysis"
                                    width="200"
                                    height="200"
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col sm="8" justifyContent="center">
                        <Link legacyBehavior href="https://github.com/syrchanan/portfolio/tree/main/r_projects/event_cvg_tern_plot">
                            <a>
                                <Heading level="2" marginTop="2">Cable News Closed Caption Analysis</Heading>
                            </a>
                        </Link>
                        <Section>
                            {contentTern}
                        </Section>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default PortfolioPage