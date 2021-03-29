import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const MiniMenu = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Свойства</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Структура</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Недоступная опция
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

