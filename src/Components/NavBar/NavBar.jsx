import { CartWidget } from "../CartWidget/CartWidget"
import { Navbar, Container, Nav } from "react-bootstrap"
import React from 'react'
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h4><Link to="/" >Beleza Imports</Link></h4>
          <Nav className="me-auto">
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/category/motores">Motores</Link></li>
            <li><Link to="/category/suspensiones">Suspensiones</Link></li>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </div>
  )
}
