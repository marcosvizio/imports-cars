import { CartWidget } from "../CartWidget/CartWidget"
import {Navbar, Container, Nav} from "react-bootstrap"
import React from 'react'

export const NavBar = () => {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Beleza imports</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Motor</Nav.Link>
      <Nav.Link href="#features">Ruedas</Nav.Link>
      <Nav.Link href="#pricing">Escapes</Nav.Link>
    </Nav>
    </Container>
    <CartWidget/>
  </Navbar>
    </div>
  )
}
