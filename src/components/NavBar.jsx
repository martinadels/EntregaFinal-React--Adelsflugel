import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from './CartWidget';

import data from "../data/products.json"
const menu = [
    { text: "Inicio", link: "/#home" },
    { text: "Productos", link: "/#features" },
    { text: "Contacto", link: "/#pricing" }
]


export const NavBar = () => (
    <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand>SportWoman</Navbar.Brand>
            <Nav className="me-auto">
                {menu.map(item => (
                    <Nav.Link key={item.text} href="{item.link}">{item.text}
                    </Nav.Link>
                ))}

            </Nav>
            <CartWidget/>
        </Container>
        

    </Navbar>

)