import React from 'react';
import "./inicio.css"
import { agregarProductoPedido } from '../../components/helpers/queriesPedido';
import { NavLink } from 'react-router-dom';


const ProductosCard = ({producto}) => {
    return (
        <div className="item">
          <div className='img'>
          <img src={producto.imagen} alt="producto"/>
          </div>
      <div className='content'>
      <h3 className="tituloProducto m-3">{producto.nombreProducto}</h3>
     <NavLink to="/error404" typeof='button' className="add">ver detalles</NavLink>
      </div>
      </div> 
    );
};

export default ProductosCard;




