import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CarWidget"




export const NavBar = () => (
 
    <Navbar bg="success" variant="dark">
    <Container>
      <Navbar.Brand href="#home">inicio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Especies</Nav.Link>
        <Nav.Link href="#features">Cuidados</Nav.Link>
        <Nav.Link href="#pricing">Plantas</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>



)