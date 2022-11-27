import { Container, Button, Modal, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import CardProducto from "./adminproductos/CardProducto";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const DetalleProducto = () => {
  return (
    <Container>
      <section> <h1>Menú</h1>
        <div className="row">
        <Form.Select aria-label="Default select example">
      <option>Seleccionar categoria</option>
      <option value="1">categotia1</option>
      <option value="2">categoria2</option>
      <option value="3">categoria3</option>
      <option value="4">categoria4</option>
    </Form.Select>

           <CardProducto></CardProducto>

        </div>
      </section>
    </Container>
  );
};

export default DetalleProducto;
