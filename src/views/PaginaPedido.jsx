import "./css/pedido.css";
import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  actualizarPedidoUsuario,
  consultarPedidoUsuario,
  crearPedido,
  eliminarProductoPedido,
} from "../components/helpers/queriesPedido";

const PaginaPedido = () => {
  const [usuario, setUsuario] = useState();
  const [resultadoPedido, setResultadoPedido] = useState([]);

  let preciosProductos = [];

  for (let i = 0; i < usuario.productos.length; i++) {
    preciosProductos = [...preciosProductos, usuario.productos[i].precio];
  }

  const [totalPedido, setTotalPedido] = useState(0);

  if (preciosProductos.length !== 0) {
    const resultadoTotalPedido = preciosProductos.reduce((acc, item) => {
      return (acc = acc + item);
    });
  }
  

  useEffect(() => {
    // CONSULTAR DATOS DEL USUARIO INCLUYENDO DENTRO LOS PRODUCTOS DEL PEDIDO
    consultarPedidoUsuario().then((pedido) => {
      setUsuario(pedido);
    });
  }, [() => setTotalPedido(resultadoPedido)]);

  let nombre = usuario.nombre;
  let apellido = usuario.apellido;
  let email = usuario.email;
  let userName = usuario.userName;
  let password = usuario.password;
  let pedido = usuario.pedido;

  const eliminarUnProducto = (codigoUnico) => {
    const productosActualizados = pedido.filter(
      (producto) => producto._id !== codigoUnico
    );
    let productosNuevos = productosActualizados;
    let usuarioActualizado = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      userName: userName,
      password: password,
      pedido: productosNuevos,
    };
    actualizarPedidoUsuario(usuarioActualizado._id, usuarioActualizado);
  };

  const eliminarTodosProductos = () => {
    let usuarioActualizado = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      userName: userName,
      password: password,
      pedido: [],
    };
    actualizarPedidoUsuario(usuarioActualizado._id, usuarioActualizado);
  };

  const enviarPedido = () => {
    if(totalPedido !== 0){
    let pedidoParaEnviar = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      productos: usuario.pedido,
      total: totalPedido,
      estado: "pendiente"
    };
    crearPedido(pedidoParaEnviar)
  }
  else{
    Swal.fire(
      'Error',
      'Debe agregar productos al pedido.',
      'error'
    )
  }

  };

  return (
    <Container>
      <h1 className="text-center mt-3 tituloPedido">Pedido</h1>
      <Container className="containerPedido">
        <ListGroup>
          <h1 className="display-5 fs-5 text-center my-5">
            Aún no agrego ningun producto a su pedido
          </h1>

          {/* {productos.map((producto) => (
                    <ItemProductoPedido
                      key={producto._id}
                      nombreProducto={producto.nombreProducto}
                      codigoUnico={producto._id}
                      precio={producto.precio}
                      eliminarUnProducto={eliminarUnProducto}
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
        <Button
          id="botonCancelarPedido"
          onClick={eliminarTodosProductos}
          className="btn w-50 mx-3"
        >
          Eliminar todos los productos
        </Button>
        <Button id="botonEnviarPedido" onClick={enviarPedido} className="btn w-50 mx-3">
          Enviar pedido
        </Button>
      </div>
    </Container>
  );
};

export default PaginaPedido;
