import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
export default function Traders() {
    return (
        <>
            <section className="traders_section" id='trader'>
                <Container>
                    <div className="heading_tab text-center">
                        <h3 className='heading'>our best traders</h3>
                        <p>Subtitle for our best traders goes on this line, integer non suscipit taciti mus etiam</p>
                    </div>
                    <Row>
                        <Col lg={4} md={4} className='tab' data-aos="fade-up" data-aos-duration={2000}>
                            <div className="traders_content">
                                <Card >
                                    <Card.Img variant="top" src={require('../Assets/images/male1.jpg').default} />
                                    <Card.Body>
                                        <Card.Title>Melvin Stewart</Card.Title>
                                        <p className='text1'><span>2.13%</span> in last month</p>
                                        <p className='text2'><span>99.82%</span> win rate</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className='tab' data-aos="zoom-in" data-aos-duration={2000}>
                            <div className="traders_content">
                                <Card >
                                    <Card.Img variant="top" src={require('../Assets/images/female.jpg').default} />
                                    <Card.Body>
                                        <Card.Title>Allison Shields</Card.Title>
                                        <p className='text1'><span>0.53%</span> in last month</p>
                                        <p className='text2'><span>99.82%</span> win rate</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        <Col lg={4} md={4} data-aos="fade-down" data-aos-duration={2000}>
                            <div className="traders_content">
                                <Card >
                                    <Card.Img variant="top" src={require('../Assets/images/male2.jpg').default} />
                                    <Card.Body>
                                        <Card.Title>Eric Sylvester</Card.Title>
                                        <p className='text1'><span>0.37%</span> in last month</p>
                                        <p className='text2'><span>99.95%</span> win rate</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                    </Row>

                    <Row data-aos="zoom-in" data-aos-duration={2000}>
                        <div className="ready_section" id='contact'>
                            <div className="ready_content d-flex">
                                <div className="ready_box">
                                    <img src={require('../Assets/images/Premade.jpg').default} alt="" />
                                </div>
                                <div className="ready_text">
                                    <h4>React to get started?</h4>
                                    <p>join our Discord today!</p>
                                </div>
                            </div>
                            <div className="ready_btn">
                                <a href="/">join descorb</a>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}
