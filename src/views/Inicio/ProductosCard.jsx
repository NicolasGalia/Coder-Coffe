import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./inicio.css"
// import { agregarProductoPedido } from '../../components/helpers/queriesPedido';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



//const ProductosCard = ({producto, actualizarPedidoprops}) => {
    //return (
        //<div className="containerProducto">
      //<img src={producto.imagen} alt="producto" width="150" height="200" className='imgProducto'/>
      //<h1 className="tituloProducto m-3">{producto.nombreProducto}</h1>
      //<span className="precioProducto">${producto.precio}</span>
      //<p className="descripcionProducto">
        //{producto.categoria}
      //</p>
      //<div class="container text-center">
      //<div class="row">
      //<button onClick={()=>{actualizarPedidoprops(producto.nombreProducto, producto.precio); handleClose}} className='btn btnCard col btn-success'>carrito</button>
      //<button className='btn btnCard col btn-warning'>ver detalles</button>
      //</div>

const ProductosCard = ({itemProducto, actualizarPedidoprops}) => {
  const [show, setShow] = useState(false);
  let carrito = JSON.parse(localStorage.getItem('shopping-cart'));
  console.log(carrito)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agregarYCerrar = (producto)=>{
    handleClose()
    const findProduct = carrito.find(p => p.nombreProducto === producto.nombreProducto)
    if (findProduct) {
      carrito = carrito.map(p => p._id === findProduct._id ? {...p, quantity: p.quantity + 1} : p)
    } else {
      carrito.push({...producto, quantity: 1});
    }
    localStorage.setItem('shopping-cart', JSON.stringify(carrito))
    actualizarPedidoprops(producto.nombreProducto, producto.precio)
  }

    return (
      <>
        <div className="item">
          <div className='img'>
          <img src={itemProducto.imagen} alt="producto"/>
          </div>
      <div className='content'>
      <h3 className="tituloProducto m-3">{itemProducto.nombreProducto}</h3>
      <Button className="add" onClick={handleShow}>
        Ver detalles
      </Button>

      </div>
      </div> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="tituloProductoModal fs-2">{itemProducto.nombreProducto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{itemProducto.categoria}</Modal.Body>
        <Modal.Body className="fs-3 precioProducto" >${itemProducto.precio}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>agregarYCerrar(itemProducto)}>
            Agregal al <i class="bi bi-cart3"></i>
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default ProductosCard;








