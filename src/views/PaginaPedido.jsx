import "./css/pedido.css";
import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { crearPedido } from "../components/helpers/queriesPedido";
import ItemProductoPedido from "./productoPedido/ItemProductoPedido";

const PaginaPedido = () => {

  useEffect(() => {
  
  }, [])
  

  const listaProductosLocal =
    JSON.parse(localStorage.getItem("listaProductos")) || [];
  const [arregloProductos, setArregloProductos] = useState(listaProductosLocal);

  const borrarProducto = (id) => {
    let listaProductosActualizada = listaProductosLocal.filter(
      (producto) => producto.id !== id
    );
    localStorage.setItem(
      "listaProductos",
      JSON.stringify(listaProductosActualizada)
    );
  };
  const limpiarPedido = () => {
    let listaProductosActualizada = [];
    localStorage.setItem(
      "listaProductos",
      JSON.stringify(listaProductosActualizada)
    );
  };

  let preciosProductos = [];

  let resultadoPedido = 0;

  if (listaProductosLocal === []) {
    for (let i = 0; i < listaProductosLocal.length; i++) {
      preciosProductos = [...preciosProductos, listaProductosLocal[i].precio];
    }

    resultadoPedido = preciosProductos.reduce((acc, item) => {
      return (acc = acc + item);
    });
  }

  // BASE DE DATOS FICTICIA
  let listaNombreProductos = " ";

  if (arregloProductos !== []) {
    for (let i = 0; i < arregloProductos.length; i++) {
      listaNombreProductos = +arregloProductos.nombreProducto;
    }
  }

  let pedidoFicticio = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
    productos: listaNombreProductos,
    total: resultadoPedido,
    estado: "pendiente",
  };

  return (
    <Container>
      <h1 className="text-center mt-3 tituloPedido">Pedido</h1>
      <Container className="containerPedido">
        <ListGroup>
          <h1 className="display-5 fs-5 text-center my-5">
            Aún no agrego ningun producto a su pedido
          </h1>
          {listaProductosLocal.map((producto) => (
            <ItemProductoPedido
              key={producto.id}
              id={producto.id}
              nombreProducto={producto.nombre}
              precio={producto.precio}
              borrarProductos={borrarProducto}
            ></ItemProductoPedido>
          ))}
        </ListGroup>

        <Row className="border-top border-dark bg-dark text-light rowTotal">
          <Col className="fs-4 display-1 ps-5 my-1" xs={9}>
            Total a pagar
          </Col>
          <Col className="fs-4 display-1 my-1">${resultadoPedido}</Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-evenly my-3">
        <Button
          id="botonCancelarPedido"
          className="btn w-50 mx-3"
          onClick={limpiarPedido}
        >
          Eliminar todos los productos
        </Button>
        <Button
          id="botonEnviarPedido"
          onClick={crearPedido.JSON.stringify(pedidoFicticio)}
          className="btn w-50 mx-3"
        >
          Enviar pedido
        </Button>
      </div>
    </Container>
  );
};

export default PaginaPedido;
