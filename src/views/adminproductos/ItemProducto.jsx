import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = () => {
    return (
        <tr>
        <td>2</td>        
        <td></td>
        <td>$512</td>
        <td>imagen</td>
        <td>Cafe-Expresso</td>
        <td>
          <Button className="btn btn-warning me-2" >
            Editar
          </Button>
          <Button variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;