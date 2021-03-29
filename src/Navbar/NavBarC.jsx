import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const NavBarC = () => {
    return (
        <Navbar bg="light" variant="light">

            <Nav className="mr-auto">
                <NavDropdown title="Вид" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Правка" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Настройки" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
                <Button variant="outline-primary">Поиск</Button>
            </Form>
        </Navbar>
    )
}

