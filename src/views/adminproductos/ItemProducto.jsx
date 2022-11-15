import { borrarProductoAPI, consultarAPI } from "../../components/helpers/queries";
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ItemProducto = ({producto, setProductos}) => {
    const {id, nombreProducto, categoria, imagen, precio} = {...producto} 
    const borrarProducto = ()=>{
  
      borrarProductoAPI(id).then((respuesta)=>{
        // TAREA: agregar la ventana de sweetaler para preguntar si queremos borrar el producto, solo en el caso de la respuesta afirmativa realizar el sieguiente codigo:
        
        if(respuesta.status === 200){
          // se pudo borrar el producto
          Swal.fire("Producto eliminado","El producto fue eliminado exitosamente","success");
          //obtener todos los productos actuales y actualizamos el state productos
          consultarAPI().then((respuesta)=>{
            setProductos(respuesta);
          })
        }else{
          //mostrar al usuario un mensaje de error
          Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
        }
      })
    }

    return (
        <tr>
        <td>{id}</td>        
        <td>{nombreProducto}</td>
        <td>${precio}</td>
        <td>{imagen}</td>
        <td>{categoria}</td>
        <td className='text-center'>
          <Link to={`/Administrador/EditarProducto/${id}`}  className="btn btn-warning " >
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