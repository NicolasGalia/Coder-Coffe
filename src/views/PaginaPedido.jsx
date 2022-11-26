import "./css/pedido.css";
import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { consultarPedidoUsuario } from "../components/helpers/queriesPedido";

const PaginaPedido = () => {
  const [productosPedido, setProductosPedido] = useState([]);
  const [resultadoPedido, setResultadoPedido] = useState([]);

  let preciosProductos = [];

  for (let i = 0; i < productosPedido.length; i++) {
    preciosProductos = [...preciosProductos, productosPedido[i].precio];
  }

  const [totalPedido, setTotalPedido] = useState(0);

if(preciosProductos.length !== 0){
  const resultadoTotalPedido = preciosProductos.reduce((acc, item) => {
    return (acc = acc + item);
  });
}


  useEffect(() => {
    consultarPedidoUsuario().then((pedido) => {
      setProductosPedido(pedido);
    });
  }, [() => setTotalPedido(resultadoPedido)]);

 

  return (
    <Container>
      <h1 className="text-center mt-3 tituloPedido">Pedido</h1>
      <Container className="containerPedido">
        <ListGroup>
          <h1 className="display-5 fs-5 text-center my-5">
            Aún no agrego ningun producto a su pedido
          </h1>

          {/* {productosPedido.map((producto) => (
                    <ItemProductoPedido
                      key={producto._id}
                      nombreProducto={producto.nombreProducto}
                      precio={producto.precio}
                    ></ItemProductoPedido>
                  ))} */}
        </ListGroup>

        <Row className="border-top border-dark bg-dark text-light rowTotal">
          <Col className="fs-4 display-1 ps-5 my-1" xs={9}>
            Total a pagar
          </Col>
          <Col className="fs-4 display-1 my-1">${totalPedido}</Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-evenly my-3">
        <Button id="botonCancelarPedido" className="btn w-50 mx-3">
          Eliminar todos los productos
        </Button>
        <Button id="botonEnviarPedido" className="btn w-50 mx-3">
          Enviar pedido
        </Button>
      </div>
    </Container>
  );
};

export default PaginaPedido;
