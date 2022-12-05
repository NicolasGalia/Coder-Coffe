import React from 'react';
import "./inicio.css"


const ProductosCard = ({producto}) => {
    return (
        <div className="containerProducto">
      <img src={producto.imagen} alt="producto" width="150" height="200" className='imgProducto'/>
      <h1 className="tituloProducto m-3">{producto.nombreProducto}</h1>
      <span className="precioProducto">${producto.precio}</span>
      <p className="descripcionProducto">
        {producto.categoria}
      </p>
      <div class="container text-center">
      <div class="row">
      <button className='btn btnCard col btn-success'>carrito</button>
      <button className='btn btnCard col btn-warning'>ver detalles</button>
      </div>
      </div>
    </div>
    );
};

export default ProductosCard;




