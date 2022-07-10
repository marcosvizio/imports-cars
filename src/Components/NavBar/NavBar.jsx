import { CartWidget } from "../CartWidget/CartWidget"
import {Navbar, Container, Nav} from "react-bootstrap"
import React from 'react'
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand> <Link to="/" > Beleza imports </Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to="/category/MotorRB26">Motor RB26</Link></Nav.Link>
      <Nav.Link> <Link to="category/Motor2JZ">Motor 2JZ</Link></Nav.Link>
    </Nav>
    </Container>
    <CartWidget/>
  </Navbar>
    </div>
  )
}
