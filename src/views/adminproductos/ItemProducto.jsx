import { borrarProductoAPI, consultarAPI } from "../../components/helpers/queries";
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ItemProducto = ({producto, setProductos}) => {
    const {id, nombreProducto, categoria, imagen, precio} = {...producto} 
    const borrarProducto = ()=>{
  
      borrarProductoAPI(id).then((respuesta)=>{
        
        if(respuesta.status === 200){
         
          Swal.fire("Producto eliminado","El producto fue eliminado exitosamente","success");
         
          consultarAPI().then((respuesta)=>{
            setProductos(respuesta);
          })
        }else{

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