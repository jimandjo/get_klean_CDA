import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import React from 'react'

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Me</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/test" className="nav-link">Test</Link>
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