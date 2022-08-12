import React,{useEffect, useState} from 'react'
import {Navbar,Nav,Container,NavDropdown } from "react-bootstrap"
import { Outlet,Link } from "react-router-dom"

const NavBarEuro= () => {
    return(
			<>
			<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Euromundo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" >
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            
            <NavDropdown title="Marketing" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/flyers" >Flyers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogos" >Catalogos</NavDropdown.Item>
							<NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Destinos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/circuitos" >Circuitos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/destinos" >Nacionales</NavDropdown.Item>
							<NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link as={Link} to="/" >Contactos</Nav.Link>
            <Nav.Link as={Link} to="/" >Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/" >Nosotros</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

			<section>
					<Outlet></Outlet>
			</section>

			</>
    )
}

export default NavBarEuro;