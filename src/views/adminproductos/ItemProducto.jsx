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
        <td className='text-center'>
          <Link to="./EditarProducto" className="btn btn-warning " >
            Editar Producto
          </Link>
          <Button variant="danger" className=' mt-2'>
            Borrar Producto
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;