import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';
import SwitchLang from '../../Components/SwitchLang/SwitchLang';
import traduction from "./traduction";
import { LanguageContext } from "../../contextLang";


function Header() {
    const { language } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleVisibility = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return isVisible && (
        <div className={`header ${isVisible ? 'visible' : ''}`}>
            <Navbar fixed="top" expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='d-none d-md-block'>Charlotte Thouvenin</Navbar.Brand>

                    <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Charlotte Thouvenin</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#portfolio" onClick={handleClose}>{traduction[language].nav1}</Nav.Link>
                                <Nav.Link href="#skills" onClick={handleClose}>{traduction[language].nav2}</Nav.Link>
                                <Nav.Link href="#about" onClick={handleClose}>{traduction[language].nav3}</Nav.Link>
                                <Nav.Link href="#contact" onClick={handleClose}>{traduction[language].nav4}</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <SwitchLang />

                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
