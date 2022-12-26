import Col from "../components/Col"
import Row from "../components/Row"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"

const ResumePage = () => {
    return(
        <Layout>
            <Container>
                {/* Experience */}
                <Row justifyContent="center">
                    <Heading level="2" marginBottom="2" underline>Work Experience</Heading>
                </Row>
                <Row> {/* CNN Temp */}
                    <Col xs="12" sm="12" md="5">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">Research Analyst, CNN</Heading>
                            <Heading level="4" marginBottom="3">April 2022 - Present</Heading>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <Row>
                            <Col>
                            <Paragraph>
                                Each day, I create ad hoc and daily research reports to share across the team and company analyzing demo deliveries, competitive standings, etc. Also, I study and process historical data to create estimates for future programs and events.
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row> {/* CNN Internship */}
                    <Col xs="12" sm="12" md="5">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">TV Research and Analytics Intern, CNN</Heading>
                            <Heading level="4" marginBottom="3">June 2021 - August 2021</Heading>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <Row>
                            <Col>
                            <Paragraph>
                                Responsible for creating and sharing daily delivery and reach reports. Used the Nielsen suite of tools to access and process viewership data. As a summer project, designed and built a custom Shiny app to track network demo deliveries over time.
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row> {/* CitrusTV */}
                    <Col xs="12" sm="12" md="5">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">Associate Producer, CitrusTV</Heading>
                            <Heading level="4" marginBottom="3">August 2019 - May 2022</Heading>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <Row>
                            <Col>
                            <Paragraph>
                                Contributed to the creation of a daily news show through stacking the rundown, writing the script, and copy editing stories.
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row> {/* KFMB */}
                    <Col xs="12" sm="12" md="5">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">Summer News Intern, KFMB</Heading>
                            <Heading level="4" marginBottom="3">June 2019 - August 2019</Heading>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <Row>
                            <Col>
                            <Paragraph>
                                Worked all over the newsroom, learning how to: write VOs, SOTVOs, and packages; stack and produce a news show; shoot and edit stories; cover breaking news, pressers, and wildfires.
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Skills & Abilities */}
                <Row justifyContent="center">
                    <Heading level="2" marginBottom="2" marginTop="3" underline>Skills and Abilities</Heading>
                </Row>
                <Row> {/* CNN Temp */}
                    <Col xs="12" sm="6">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">Data Analytics</Heading>
                            <Paragraph>
                                Certified Tableau Desktop Specialist
                            </Paragraph>
                            <Paragraph>
                                R: Tidyverse, R Markdown, Shiny
                            </Paragraph>
                            <Paragraph>
                                Python: Pandas, Numpy
                            </Paragraph>
                            <Paragraph>
                                Machine Learning: Decision Tree, Random Forest, Support Vector Machine, Naive Bayes, Neural Nets, Gradient Boosting, Association Rules and k-Nearest Neighbor
                            </Paragraph>
                            <Paragraph>
                                Web Development: HTML, CSS, Wordpress, Sass, NextJS
                            </Paragraph>
                            <Paragraph>
                                VBA for Office Products
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="6">
                        <Row>
                            <Col>
                            <Heading level="3" marginBottom="1">Other</Heading>
                            <Paragraph>
                                Nielsen: NNTV, NPower, NCL
                            </Paragraph>
                            <Paragraph>
                                Microsoft: Word, Excel, OneNote, PowerPoint, Teams and Vizio
                            </Paragraph>
                            <Paragraph>
                                RStudio, VSCode
                            </Paragraph>
                            <Paragraph>
                                Orange Data Mining
                            </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* Education */}
                <Row justifyContent="center">
                    <Heading level="2" marginBottom="3" marginTop="3" underline>Education</Heading>
                </Row>
                <Row> {/* Syracuse U */}
                    <Col xs="12" sm="12" md="5">
                        <Row>
                            <Col flexDirection="column">
                            <Heading level="3" marginBottom="1">Syracuse University</Heading>
                            <Heading level="4" marginBottom="3">Summa Cum Laude, 2018 - 2022</Heading>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <Row>
                            <Col>
                            <Paragraph>
                                B.S. Broadcast and Digital Journalism
                            </Paragraph>
                            <Paragraph>
                                B.S. Information Management and Technology, Concentration in Data Analytics
                            </Paragraph>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ResumePage