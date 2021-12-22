import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeBoxComponent from './HomeBoxComponent';

import icon1 from '../Assets/images/icons/1.svg';
import icon2 from '../Assets/images/icons/2.svg';
import icon3 from '../Assets/images/icons/3.svg';
import icon4 from '../Assets/images/icons/4.svg';

export default function Home() {
    return (
        <>
            <section className="home_section" id="home">
                <Container>
                    <Row>
                        <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={2000}>
                            <div className="home_left">
                                <div className="home_content">
                                    <h1>The main title can go on <span className='space'> </span> this line.</h1>
                                    <p>Subtitle can go on this line, can explain basic <br /> pricing or other information that is semi-important</p>
                                    <div className="btn-block">
                                        <a href="/" className='home-btn'>learn more</a>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} data-aos="fade-down" data-aos-duration={2000}>
                            <div className="home-box-bg-img">
                                <img src={require('../Assets/images/home.jpg').default} alt="img" />                            </div>
                            <div className="home_right">
                                <HomeBoxComponent name='Solana' img={icon1} number='$193.35' per='-0.55%' cls='one' />
                                <HomeBoxComponent name='Bitcoin' img={icon2} number='$54,625.34' per='+1.25%' cls='two' />
                                <HomeBoxComponent name='Decentraland' img={icon3} number='$4.65' per='-0.17%' cls='three' />
                                <HomeBoxComponent name='Ethereum' img={icon4} number='$4,084.09' per='+0.53%' cls='four' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
