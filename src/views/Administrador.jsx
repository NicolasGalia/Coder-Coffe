import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert";
import { consultarUsuario } from "../components/helpers/queriesLogin";
import ItemUsuarios from "../views/adminUsuarios/itemUsuarios";
import { consultarPedidoTodos } from "../components/helpers/queriesPedido";
import Modal from "react-bootstrap/Modal";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        

        swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  const [listaPedido, setListaPedido] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    consultarUsuario().then(
      (respuesta) => {
        setUsuarios(respuesta);
      },
      (reason) => {
      

        swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
    consultarPedidoTodos().then(
      (respuesta) => {
        setListaPedido(respuesta);
      },
      (reason) => {
       

        swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const toggleOpenModal = () => {
    setShowModal(!showModal);
  };

  const openModal = (email) => {
   
    toggleOpenModal();
    const findOrder = listaPedido.find((item) => item.nombreUsuario === email);
    setCurrentOrder(findOrder);
  };
  
  return (
    <>
      <Modal show={showModal} onHide={toggleOpenModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {currentOrder?.pedido?.map((item) => (
              <li>
                `${item.nombre} - ${item.precio}`
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <div className="mainSection my-5 container">
        <section className="container  boxAdmin p-2 my-5 ">
          <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
            <h1 className="display-6 tituloAdmin ">PRODUCTOS</h1>
            <Link to="/CrearProducto" className="btn  btnAgregar ">
              Agregar Producto
            </Link>
          </div>
          <hr />
          <Table responsive={"sm md"}>
            <thead className="text-light text-center">
              <tr>
                <th>PRODUCTO</th>
                <th>PRECIO</th>
                <th>CATEGORIA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody className="fw-bold">
              {productos.map((producto) => (
                <ItemProducto
                  key={producto._id}
                  producto={producto}
                  setProductos={setProductos}
                ></ItemProducto>
              ))}
            </tbody>
          </Table>
        </section>
        <section className="container  boxAdmin p-2 my-5 mainSection">
          <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
            <h1 className="display-6 tituloAdmin ">USUARIOS REGISTRADOS</h1>
          </div>
          <hr />
          <Table responsive={"sm md"}>
            <thead className="text-light text-center">
              <tr>
                <th>USUARIO</th>
                <th>EMAIL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody className="fw-bold text-center">
              {usuarios.map((usuario) => (
                <ItemUsuarios
                  key={usuario._id}
                  usuario={usuario}
                  setUsuarios={setUsuarios}
                ></ItemUsuarios>
              ))}
            </tbody>
          </Table>
        </section>
        <section className="container boxAdmin p-2 my-5">
          <div className="d-flex justify-content-between align-items-center mt-5 ps-3 pe-3">
            <h1 className="display-6 tituloAdmin">PEDIDOS EN CARRITO</h1>
          </div>
          <hr />
          <Table responsive={"sm md"}>
            <thead className="text-light text-center">
              <tr>
                <th>Email</th>
                <th>Productos</th>
                <th>Precio Total</th>
              </tr>
            </thead>
            <tbody className="fw-bold text-center">
              {listaPedido.map((pedido) => (
                <tr>
                  <td>{pedido.nombreUsuario}</td>
                  <td>
                    <Button onClick={() => openModal(pedido.nombreUsuario)}>
                      Ver productos
                    </Button>
                  </td>
                  <td>
                    <Badge>{pedido.total}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    </>
  );
};

export default Administrador;
