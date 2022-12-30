import Head from 'next/head'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import TitleImage from '../components/TitleImage'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import CircleButton from '../components/CircleButton'


export default function Home() {
  return (
      <Layout>
        <Head>
        <title>Home</title>
        <link rel="icon" href="/icon.png"/>
        </Head>
        
        <Container>
          <Row justifyContent='center' alignItems='center'>
            <Col xs="12" sm="12" md="6" justifyContent='center' alignItems='center'>
              <TitleImage
                  src="/images/hanan_tall.jpg"
                  alt="Connor Hanan"
                  dim="tall"
                />
            </Col>
            <Col xs="12" sm="12" md="6" alignItems='center' justifyContent='center'>
              <Row justifyContent='center' alignItems="center">
                <Col xs="10" sm="10">
                  <Heading level="1" marginBottom="1">Connor Hanan</Heading>
                  <Paragraph intro>
                    Passionate about the growing intersection of data analytics and television, Connor is interested in applying data-driven visualizations and models to explore the future of news media.
                  </Paragraph>
                </Col>
              </Row>
              <Row alignItems='center' justifyContent='center'>
                <Col xs="4" sm="4">
                  <CircleButton type="1">resume</CircleButton>
                </Col>
                <Col xs="4" sm="4">
                  <CircleButton type="2">portfolio</CircleButton>
                </Col>
                <Col xs="4" sm="4">
                  <CircleButton type="3">contact</CircleButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}
