import React, { useState } from "react";

import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import Cart from "./Cart/Cart";
import CartCollapse from "./Cart/CartCollapse";

const Header = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {setCartIsOpen(true)};
  const hideCartHandler = () => {setCartIsOpen(false)};
  console.log(cartIsOpen);

  return (
    <header>
      {cartIsOpen && <Cart onClose={hideCartHandler} show={cartIsOpen} />}
      <Navbar bg="black" variant="dark" expand="sm" fixed="top" className="py-1" style={{borderBottom: '2px solid white'}}>
        <Container>
          <Nav className="me-auto mx-auto">
            <Nav.Link href="#home" className="fw-bold text-white">HOME</Nav.Link>
            <Nav.Link href="#features" className="fw-bold text-white">STORE</Nav.Link>
            <Nav.Link href="#pricing" className="fw-bold text-white">ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Button variant="outline-info" onClick={showCartHandler} className="text-white me-1">Cart</Button>
        <h5 className="text-info me-3">0</h5>
        
      </Navbar>
      <p className="display-1 text-center bg-secondary py-5 text-white fw-bold">The Generics</p>
    </header>
  );
};

export default Header;
