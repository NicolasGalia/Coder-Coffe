import React from 'react';
import "./inicio.css"


const ProductosCard = ({producto}) => {
    return (
        <div className="containerProducto">
      <img src={producto.imagen} alt="" width="150" height="200"/>
      <h1 className="tituloProducto">{producto.nombreProducto}</h1>
      <span className="precioProducto">{producto.precio}</span>
      <p className="descripcionProducto">
        {producto.categoria}
      </p>
      <button className='btn btnCard'>carrito</button>
      <button className='btn btnCard'>ver detalles</button>
    </div>
    );
};

export default ProductosCard;



