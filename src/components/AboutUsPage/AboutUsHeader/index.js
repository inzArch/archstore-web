import React from 'react';
import './index.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo_Blue from 'assets/images/header/Logo_Blue.png';
import { AboutUsHeaderContent } from './AboutUsHeaderContent.js';

const AboutUsHeader = () => {
  return (
    <div className='about-us-navbar'>
        <Navbar fixed="top" expand="lg" bg="white" variant='white'>
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
                            {
                                option.content.map((content,i)=>(
                                    <>
                                        {
                                            Object.keys(content).includes("category") ? <NavDropdown title={content.item}>
                                                {
                                                    content.category.map((category,i)=>(
                                                        <NavDropdown.Item className='inner-dropdown'>
                                                            {category.subitem}
                                                        </NavDropdown.Item>
                                                    ))
                                                }
                                            </NavDropdown> : <NavDropdown.Item>{content.item}</NavDropdown.Item>
                                        }
                                    </>
                                ))
                            }
                        </NavDropdown>

                    ))}

                        <Nav.Link className='about-us-header-link'>
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