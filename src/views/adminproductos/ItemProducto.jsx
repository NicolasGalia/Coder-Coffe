import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemProducto = ({producto, setProductos}) => {
    const {id, nombreProducto, categoria, imagen, precio} = {...producto} 

    return (
        <tr>
        <td>{id}</td>        
        <td>{nombreProducto}</td>
        <td>${precio}</td>
        <td>{imagen}</td>
        <td>{categoria}</td>
        <td>
          <Link to="./EditarProducto" className="btn btn-warning ms-2" >
            Editar
          </Link>
          <Button variant="danger" className='ms-2 mt-2'>
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;