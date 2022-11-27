import React from 'react';
import "./inicio.css"
import productoPizza from "../../img/productoPizza.png"

const ProductosCard = () => {
    return (
        <div className="containerProducto">
      <img src={productoPizza} alt="" width="150" height="200"/>
      <h1 className="tituloProducto">FIORI DI ZUCCA</h1>
      <span className="precioProducto">$19.90</span>
      <p className="descripcionProducto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className='btn btnCard'>carrito</button>
      <button className='btn btnCard'>ver detalles</button>
    </div>
    );
};

export default ProductosCard;

