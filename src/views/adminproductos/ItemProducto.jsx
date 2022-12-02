import { borrarProductoAPI, consultarAPI } from "../../components/helpers/queries";
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ItemProducto = ({producto, setProductos}) => {
    const {_id, nombreProducto, categoria, imagen, precio} = {...producto} 
    const borrarProducto = ()=>{
  
          Swal.fire({
            title: 'Eliminar Producto',
            text: "Desea Eliminar este Producto?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#520',
            cancelButtonText: 'No!',
            confirmButtonText: 'si!'
          }).then((result) => {
            if (result.isConfirmed) {
              borrarProductoAPI(_id).then((respuesta)=>{
        
                if(respuesta.status === 200){
              Swal.fire(
                'Producto eliminado!',
                'El producto fue Eliminado con exito',
                'success'
              )
            }
            consultarAPI().then((respuesta)=>{
              setProductos(respuesta);
            })
          })
    
        }
      })
    }

    return (
        <tr>
                
        <td>{nombreProducto}</td>
        <td>${precio}</td>
        
        <td>{categoria}</td>
        <td>
          <Link to={`/Administrador/EditarProducto/${_id}`}  className="btn btn-warning " >
            Editar Producto
          </Link>
          <Button variant="danger" className=' mt-2' onClick={borrarProducto}>
            Borrar Producto
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;