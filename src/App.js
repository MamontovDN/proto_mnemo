import './App.css';
import {NavBarC} from "./Navbar/NavBarC";
import {Col, Container, Row} from "react-bootstrap";
import {Menu} from "./Menu/Menu";
import {Schema} from "./Schema/Schema";
import {Tabl} from "./Tabl/Tabl";
import {Graph} from "./Graph/Graph";
import {MiniMenu} from "./MiniMenu/MiniMenu";
import {MiniSettings} from "./MiniSettings/MiniSettings";


function App() {
    return (
        <div className="App">
            <NavBarC/>
            <Container fluid>
                <Row style={{height: '550px'}}>
                    <Col sm={1}>
                        <MiniMenu/>
                    </Col>
                    <Col sm={2}><Menu/></Col>
                    <Col sm={9}><Schema/></Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <MiniMenu/>
                    </Col>
                    <Col sm={2}><MiniSettings/></Col>
                    <Col sm={9}>
                        <Row style={{height: '50px'}} className={'mb-3'}>
                            <Col>
                                <Tabl/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Graph/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
