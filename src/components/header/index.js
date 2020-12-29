import React from 'react';
import {
  Navbar,
  Container
} from 'react-bootstrap';
import { 
  FaUserCircle
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="main-header">
      <Navbar>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#">Widget Depot</Navbar.Brand>
          <Navbar.Text>
            <a href="#"><FaUserCircle size={22} /></a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
