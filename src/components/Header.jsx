import React,{useState} from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-scroll';

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const sticky_header = () => {
        if (window.scrollY >= 90) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', sticky_header);
    return (
        <header>
            <Navbar expand="lg" className={navbar ? 'active_header ' : 'navbar '}>
                <Container fluid>
                    <Navbar.Brand href="#home"><img src={require('../Assets/images/icons/logo.svg').default} alt="img" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className='nav-link' activeClass="active" to="home" spy={true} smooth={true}>
                                Home
                            </Link>
                            <Link className='nav-link' to="pricing" spy={true} smooth={true}>
                                Pricing
                            </Link>
                            <Link className='nav-link' to="trader" spy={true} smooth={true}>
                                About Us
                            </Link>
                            <Link className='nav-link' to="contact" spy={true} smooth={true}>
                                Contact Us
                            </Link>
                            <Link className='nav-link' to="service" spy={true} smooth={true}>
                                |
                            </Link>
                            <Link className='nav-link' to="service" spy={true} smooth={true}>
                                Login
                            </Link>
                            <Link className='nav-link' to="service" spy={true} smooth={true}>
                                Sign Up
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
