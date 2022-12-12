import "./css/pedido.css";
import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  editarPedidoBD,
  enviarPedido,
} from "../components/helpers/queriesPedido";
import ItemProductoPedido from "./productoPedido/ItemProductoPedido";
import axios from "axios";
import Swal from "sweetalert2";

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
  }, []);

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

  const borrarProducto = (id, precio) => {
    const productosActualizados = arregloPedido.filter(
      (producto) => producto._id !== id
    );
    const pedidoActualizado = {
      _id: pedido._id,
      nombreUsuario: pedido.nombreUsuario,
      pedido: productosActualizados,
      total: pedido.total - precio,
    };
    editarPedidoBD(pedido._id, pedidoActualizado);
  };

  let pedidoListoParaEnviar = {
    nombreUsuario: pedido.nombreUsuario,
    pedido: arregloPedido,
    total: pedido.total,
  };

  const enviarPedidoSweetAlert = ()=>{
    Swal.fire({
      title: 'Enviar pedido',
      text: "¿Desea enviar el pedido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F2DEA2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar',
      cancelmButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviado',
          'Su pedio fue enviado con éxito',
          'success'
        )
        enviarPedido(pedidoListoParaEnviar)
        vaciarPedido(false)
      }
    })
  }


  const vaciarPedido = (vaciar) => {
    if(vaciar){
      Swal.fire({
        title: 'Vaciar el pedido',
        text: "¿Desea eliminar todos los productos de su pedido?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F2DEA2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Pedido actualizado',
            'Su pedido fue vaciado con éxito.',
            'success'
          )
          const pedidoVacio = {
            _id: pedido._id,
            nombreUsuario: pedido.nombreUsuario,
            pedido: [],
            total: 0,
          };
          editarPedidoBD(pedido._id, pedidoVacio);
        }
      })
      
    }
    else{
      const pedidoVacio = {
        _id: pedido._id,
        nombreUsuario: pedido.nombreUsuario,
        pedido: [],
        total: 0,
      };
      editarPedidoBD(pedido._id, pedidoVacio);
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
        <Button onClick={()=>vaciarPedido(true)} id="botonCancelarPedido" className="btn w-50 mx-3">
          Eliminar todos los productos
        </Button>
        <Button
          id="botonEnviarPedido"
          onClick={() =>{ enviarPedidoSweetAlert()}}
          className="btn w-50 mx-3"
        >
          Enviar pedido
        </Button>
      </div>
    </Container>
  );
};

export default PaginaPedido;
