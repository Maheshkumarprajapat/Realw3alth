import React from 'react';
import { Container, Row } from 'react-bootstrap'
import checkicon from '../Assets/images/icons/check.svg';
import dashicon from '../Assets/images/dash.png';
import PriceCom from './PriceCom';

export default function Pricing() {
    return (
        <>
            <section className="pricing_section" id="pricing">
                <Container>
                <div className="heading_tab text-center">
                        <h3 className='heading'>pricing plans</h3>
                        <p>Plans to fit any size budget or lorem ipsum dolor sit amet.</p>
                    </div>

                   
                    <Row>
                        <div className="pricing_content mx-auto">
                            <ul data-aos="zoom-in-right" data-aos-duration={2000}>
                                <li>
                                    <div className="card_top">
                                        <h4>standard</h4>
                                        <h5><span>$100</span> / month</h5>
                                        <a href="/" class="button">Sign Up</a>
                                    </div>
                                    <div class="details_list">
                                        <PriceCom title='Member Dashboard' icon={checkicon} cls='check' />
                                        <PriceCom title='Balance Overview' icon={checkicon} cls='check' />
                                        <PriceCom title='All Copy Traders' icon={checkicon} cls='check' />
                                        <PriceCom title='Trade History' icon={checkicon} cls='check' />
                                        <PriceCom title='Automated Trading' icon={checkicon} cls='check' />
                                        <PriceCom title='Support Platform' icon={checkicon} cls='check' />
                                        <PriceCom title='Premium Discord' icon={dashicon} cls='dash' />
                                        <PriceCom title='Crypto/Stock/Options Alerts' icon={dashicon} cls='dash' />
                                        <PriceCom title='Educational Resources' icon={dashicon} cls='dash' />
                                    </div>
                                </li>
                            </ul>

                            <ul data-aos="zoom-in-left" data-aos-duration={2000}>
                                <li>
                                    <div className="card_top card2">
                                        <h4>standard</h4>
                                        <h5><span>$100</span> / month</h5>
                                        <a href="/" class="button button2">Sign Up</a>
                                    </div>
                                    <div class="details_list">
                                        <PriceCom title='Member Dashboard' icon={checkicon} cls='check' />
                                        <PriceCom title='Balance Overview' icon={checkicon} cls='check' />
                                        <PriceCom title='All Copy Traders' icon={checkicon} cls='check' />
                                        <PriceCom title='Trade History' icon={checkicon} cls='check' />
                                        <PriceCom title='Automated Trading' icon={checkicon} cls='check' />
                                        <PriceCom title='Support Platform' icon={checkicon} cls='check' />
                                        <PriceCom title='Premium Discord' icon={checkicon} cls='check' />
                                        <PriceCom title='Crypto/Stock/Options Alerts' icon={checkicon} cls='check' />
                                        <PriceCom title='Educational Resources' icon={checkicon} cls='check' />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}