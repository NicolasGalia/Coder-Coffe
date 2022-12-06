import "./css/pedido.css";
import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { editarPedidoBD, enviarPedido } from "../components/helpers/queriesPedido";
import ItemProductoPedido from "./productoPedido/ItemProductoPedido";
import axios from "axios";

const PaginaPedido = () => {
  // USUARIO FALSO BORRAR
  const usuarioFalso = {
    nombreUsuario: "Edu",
    idUsuario: 5484212,
    apellido: "Ross",
  };

  const [pedido, setPedido] = useState({});
  
  useEffect(() => {
    getPedido();
  }, [pedido]);
  

  const getPedido = async () => {
    const pedido = await axios.get(
      `${process.env.REACT_APP_API_CODER}/pedidos`,
      {
        params: {
          nombreUsuario: usuarioFalso.nombreUsuario,
        },
      }
    );
    setPedido(pedido.data);
  };
    
  let arregloPedido = pedido.pedido;


  const borrarProducto = (id, precio)=>{
    const productosActualizados = arregloPedido.filter(
      (producto) => producto._id !== id
    );
    const pedidoActualizado = {
      _id: pedido._id,
      nombreUsuario: pedido.nombreUsuario,
      pedido: productosActualizados,
      total: pedido.total - precio,
    };
    editarPedidoBD(pedido._id, pedidoActualizado)

  }


  return (
    <Container>
      <h1 className="text-center mt-3 tituloPedido">Pedido</h1>
      <Container className="containerPedido">
        <ListGroup>
          <h1 className="display-5 fs-5 text-center my-5">
            Aún no agrego ningun producto a su pedido
          </h1>
          {arregloPedido?.map((producto) => (
            <ItemProductoPedido
              key={producto._id}
              nombreProducto={producto.nombre}
              precio={producto.precio}
              id={producto._id}
              borrarProductoprop={borrarProducto}
            ></ItemProductoPedido>
          ))}
        </ListGroup>

        <Row className="border-top border-dark bg-dark text-light rowTotal">
          <Col className="fs-4 display-1 ps-5 my-1" xs={9}>
            Total a pagar
          </Col>
          <Col className="fs-4 display-1 my-1">${pedido.total}</Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-evenly my-3">
        <Button id="botonCancelarPedido" className="btn w-50 mx-3">
          Eliminar todos los productos
        </Button>
        <Button id="botonEnviarPedido" onClick={enviarPedido(pedido)} className="btn w-50 mx-3">
          Enviar pedido
        </Button>
      </div>
    </Container>
  );
};

export default PaginaPedido;
