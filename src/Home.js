import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import React from 'react'
import { NavbarBrand } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <NavbarBrand>Get Klean CDA</NavbarBrand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Me</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>

          </Nav>
        </Container>
      </Navbar>

      

      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home