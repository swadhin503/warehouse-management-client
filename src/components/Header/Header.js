import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="fs-3" href="#home">Laptop's Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/items" href="#items">Items</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" href="#items">Blogs</Nav.Link>
                    </Nav>

                    <Nav>
                    
                        {
                          user ?
                          <Nav>
                              <Nav.Link as={Link} to="/manageItems" href="#">Manage Item</Nav.Link>
                              <Nav.Link as={Link} to="/addItems" href="#">Add Item</Nav.Link>
                              <Nav.Link as={Link} to="/myItems" href="#">My Items</Nav.Link>
                              <Nav.Link onClick={logOut} href="#memes">Sign Out</Nav.Link>
                          </Nav>
                          :
                          <Nav.Link as={Link} to="/login" href="#memes">Login</Nav.Link>
                        } 
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;