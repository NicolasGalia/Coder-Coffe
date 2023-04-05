import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./inicio.css";

const ProductosCard = ({ itemProducto, actualizarPedidoprops }) => {
  const [show, setShow] = useState(false);
  let carrito = JSON.parse(localStorage.getItem("shopping-cart"));
  const token = localStorage.getItem("tokenCoderCofee");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarYCerrar = (producto) => {
    handleClose();
    if (token) {
      const findProduct = carrito.find(
        (p) => p.nombreProducto === producto.nombreProducto
      );
      if (findProduct) {
        carrito = carrito.map((p) =>
          p._id === findProduct._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        carrito.push({ ...producto, quantity: 1 });
      }
      localStorage.setItem("shopping-cart", JSON.stringify(carrito));
    }
    actualizarPedidoprops(producto.nombreProducto, producto.precio);
  };

  return (
    <>
      <div className="item">
        <div className="img">
          <img src={itemProducto.imagen} alt="producto" />
        </div>
        <div className="content">
          <h3 className="tituloProducto m-3">{itemProducto.nombreProducto}</h3>
          <Button className="add" onClick={handleShow}>
            Ver detalles
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="tituloProductoModal fs-2">
            {itemProducto.nombreProducto}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{itemProducto.categoria}</Modal.Body>
        <Modal.Body className="fs-3 precioProducto">
          ${itemProducto.precio}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => agregarYCerrar(itemProducto)}
          >
            Agregal al <i class="bi bi-cart3"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductosCard;
