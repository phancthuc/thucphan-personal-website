import React, { Component } from 'react';
import { Row, Col, Badge, Container, Card } from 'react-bootstrap';
import './Projects.css'


export class Projects extends Component {
    render() {
        return (
            <>

                <Container className="container-projects">
                    <Row className="justify-content-md-center">

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Card.Title>Spicy Mafia <Badge pill variant="primary">ReactJS</Badge></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Mobile Game</Card.Subtitle></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Based on the classic party game, Mafia is a web game that allows players to connect individually on their own mobile devices, desktop, etc. paired with automated gameplay while also promoting social interaction.
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href="https://github.com/phancthuc/spicy-mafia">
                                        GitHub Repo
                                    </Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Card.Title>Spicy Battle <Badge pill variant="primary">HTML</Badge></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Mobile Game</Card.Subtitle></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Spicy Battle is a mobile web game that incorporates character level progression and battling monsters to encourage users to be active. All the exercises included can be performed without the need of extra workout equipment.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href="https://github.com/phancthuc/spicy-battle?organization=phancthuc&organization=phancthuc">
                                        GitHub Repo
                                    </Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>
                                    <Card.Title>Clima Weather App <Badge pill variant="danger">Swift</Badge></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Mobile Application</Card.Subtitle></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        A simple Swift application that fetches weather information using the OpenWeatherMap.org API based on user location. 
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href="https://github.com/phancthuc/spicy-battle?organization=phancthuc&organization=phancthuc">
                                        GitHub Repo
                                    </Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                </Container>
            </>
        )
    }
}

export default Projects
