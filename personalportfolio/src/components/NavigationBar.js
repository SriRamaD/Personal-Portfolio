import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import icon1 from '../assets/images/linkedinlogo.svg';
import icon2 from '../assets/images/git.png';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scroll ? "scroll" : ""}>
            <Container>
                <Navbar.Brand href="#logo">Sri Rama</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/krishnasai1310/">
                                <img src={icon1} alt="linkedin" />
                            </a>
                            <a href="https://www.linkedin.com/in/krishnasai1310/">
                                <img src={icon2} alt="github" className="w-full h-full" />
                            </a>
                        </div>
                        <button className='vvd' onClick={() => console.log('Contact Us Form')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;