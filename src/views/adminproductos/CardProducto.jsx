import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = ({producto}) => {
  return (
    <Card className="my-4 w-25 h-25">
      <Card.Img
        variant="top"
        src={producto.imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>Precio: {producto.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn btn-danger me-2">Ver más</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;