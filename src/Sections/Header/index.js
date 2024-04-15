import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SwitchLang from '../../Components/SwitchLang/SwitchLang';
import './style.scss'
import { useState, useEffect } from 'react';
import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"
import { UpButton } from '../../Components/Return';


function Header() {

    const { language } = useContext(LanguageContext)
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        isVisible &&
        <div className={`header ${isVisible ? 'visible' : ''}`}>
            <Navbar fixed="bottom" expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand href="#home">Charlotte Thouvenin</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">{traduction[language].nav1}</Nav.Link>
                            <Nav.Link href="#home">{traduction[language].nav2}</Nav.Link>
                            <Nav.Link href="#home">{traduction[language].nav3}</Nav.Link>
                            <Nav.Link href="#home">{traduction[language].nav4}</Nav.Link>
                        </Nav>

                        <SwitchLang />
                        <UpButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
}

export default Header;