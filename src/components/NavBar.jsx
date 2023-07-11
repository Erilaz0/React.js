import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CarWidget"
import  data  from "../data/productos.json"
import { NavLink } from 'react-router-dom';

const especies = data.map(product => product.category)
const especie = new Set(especies)

export const NavBar = () => (

    <Navbar bg="success" variant="dark">
    <Container>
      <Navbar.Brand href="/">inicio</Navbar.Brand>
      <Nav className="me-auto">
        {[...especie].map(item => ( //aca lo q hacemos es recorrer las especies de las plantas y las ponemos en el nav
           <NavLink className={'nav-link'} to={`/category/${item}`} >
           {item}

          </NavLink>

        ))}
        <Nav.Link href="#especies">Especies</Nav.Link>
        <Nav.Link href="#cuidados">Cuidados</Nav.Link>
        <Nav.Link href="#plantas">Plantas</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>



)