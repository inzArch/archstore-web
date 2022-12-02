import React from 'react';
import './index.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo_Blue from 'assets/images/header/Logo_Blue.png';
import { AboutUsHeaderContent } from './AboutUsHeaderContent.js';

const AboutUsHeader = () => {
  return (
    <div className='about-us-navbar'>
        <Navbar fixed="top" expand="lg" bg="white">
            <Container>
                <Navbar.Brand>
                    <img 
                        src={Logo_Blue} 
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className='me-auto'>
                    {AboutUsHeaderContent.map((option,i)=>(
                        <NavDropdown title={option.name}  id="navbarScrollingDropdown-expand">
                            <NavDropdown.Item>
                                {option.content}
                            </NavDropdown.Item>
                        </NavDropdown>

                    ))}

                        <Nav.Link>
                            Web Traffic & Community
                        </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default AboutUsHeader