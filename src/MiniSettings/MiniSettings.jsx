import {Badge, Button, Form, FormControl, ListGroup, Nav, Navbar} from "react-bootstrap";

export const MiniSettings = () => {
    return (
        <ListGroup>
            <ListGroup.Item>Свойства
            </ListGroup.Item>
            <ListGroup.Item variant="primary">Уставки</ListGroup.Item>
            <ListGroup.Item variant="success">настройки</ListGroup.Item>
            <ListGroup.Item variant="danger">
                Тревога <Badge variant="light">2</Badge>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
                Предупреждения <Badge variant="light">6</Badge>
            </ListGroup.Item>
            <ListGroup.Item variant="info">Информация</ListGroup.Item>
        </ListGroup>
    )
}

