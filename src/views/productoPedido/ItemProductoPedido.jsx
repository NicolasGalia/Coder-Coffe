import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemProductoPedido = ({ nombreProducto, precio, eliminarUnProducto, codigoUnico }) => {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        <h1 className=" fs-5">{nombreProducto}</h1>
        <h2 className="fs-5 display-5">
          ${precio}
          <Button className="bg-danger ms-3" onClick={()=>eliminarUnProducto(codigoUnico)}>
            <i className=" text- light bi bi-trash3-fill"></i>
            
          </Button>
        </h2>
      </ListGroup.Item>
    </>
  );
};

export default ItemProductoPedido;
