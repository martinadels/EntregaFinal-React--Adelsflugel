import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
//import { Link } from 'react-router-dom';

export const Item = ({ prenda }) => {
    return (
        <Card
            style={{ width: "18rem" }}
            key={prenda.id}
            className="float-start"
        >
            <Card.Img variant="top" src={prenda.img} />
            <Card.Body>
                <Card.Title>{prenda.brand}</Card.Title>
                <Card.Text>Categoria: {prenda.category}</Card.Text>
                <Link to={"/prenda/$ {prenda.id}"} >"
                    < Button variant="primary">Ver detalle</Button>
            </Link>


        </Card.Body>
        </Card>
    )
}


