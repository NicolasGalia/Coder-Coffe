import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./inicio.css"
// import { agregarProductoPedido } from '../../components/helpers/queriesPedido';
import { NavLink } from 'react-router-dom';


const ProductosCard = ({producto}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <div className="item">
          <div className='img'>
          <img src={producto.imagen} alt="producto"/>
          </div>
      <div className='content'>
      <h3 className="tituloProducto m-3">{producto.nombreProducto}</h3>
      <Button className="add" onClick={handleShow}>
        Ver detalles
      </Button>
      </div>
      </div> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="tituloProductoModal fs-2">{producto.nombreProducto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{producto.categoria}</Modal.Body>
        <Modal.Body className="fs-3 precioProducto" >${producto.precio}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Agregal al <i class="bi bi-cart3"></i>
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default ProductosCard;








