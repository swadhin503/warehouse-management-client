import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Laptop's Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/items" href="#items">Items</Nav.Link>
                    <Nav.Link as={Link} to="/blogs" href="#items">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link as={Link} to="/aboutus" href="#about_us">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/login" href="#memes">Login</Nav.Link>
                    <Nav.Link onClick={logOut} href="#memes">Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;