import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Contact() {
    return (
        <>
            <section className="footer_section">
                <Container>
                    <div className="footer_content">
                        <Row>
                            <Col lg={3} md={6} data-aos="zoom-out-up" data-aos-duration={2000}>
                                <div className="footer-logo">
                                    <img src={require('../Assets/images/icons/logo.svg').default} alt="img" />
                                </div>
                            </Col>
                            <Col lg={3} md={6} data-aos="zoom-out-right" data-aos-duration={2000}>
                                <div className="footer_text">
                                    <h5>category</h5>
                                    <ul>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} data-aos="zoom-out-down" data-aos-duration={2000}>
                                <div className="footer_text">
                                    <h5>category two</h5>
                                    <ul>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} data-aos="zoom-out" data-aos-duration={2000}>
                                <div className="footer_text">
                                    <h5>category three</h5>
                                    <ul>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                        <li><a href="/">category link</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="footer_footer">
                        <Row>
                            <Col lg={4} md={4}>
                                <div className="footer_copyright">
                                    <p>Copyright &copy; 2021 Realw3alth LLC</p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className="footer_email">
                                    <p>contact&copy;website.com </p>
                                </div>
                            </Col>
                            <Col lg={4} md={4}>
                                <div className="footer_icons">
                                    <ul>
                                        <li><a href="/"><img src={require('../Assets/images/icons/twitter.svg').default} alt="" /></a></li>
                                        <li><a href="/"><img src={require('../Assets/images/icons/instagram.svg').default} alt="" /></a></li>
                                        <li><a href="/"><img src={require('../Assets/images/icons/twitter.svg').default} alt="" /></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
