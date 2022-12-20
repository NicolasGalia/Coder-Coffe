import { Container, Button, Modal, Card } from "react-bootstrap";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
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
      <section> Almuerzo/cena
        <div className="row">
          <Carousel breakPoints={breakPoints}>
           <CardProducto></CardProducto>
          </Carousel>
        </div>
      </section>
    </Container>
  );
};

export default DetalleProducto;
