import { borrarUsuarioAPI, consultarUsuario } from "../../components/helpers/queriesLogin";
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


const ItemUsuarios = ({usuarios, setUsuarios}) => {
    const {nombre, apellido, email, userName, password, _id} = {...usuarios} 
    const borrarUsuario = ()=>{
  
          Swal.fire({
            title: 'Eliminar Usuarios',
            text: "Desea Eliminar este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#520',
            cancelButtonText: 'No!',
            confirmButtonText: 'si!'
          }).then((result) => {
            if (result.isConfirmed) {
              borrarUsuarioAPI(_id).then((respuesta)=>{
        
                if(respuesta.status === 200){
              Swal.fire(
                'Usuario eliminado!',
                'El producto fue Eliminado con exito',
                'success'
              )
            }
            consultarUsuario().then((respuesta)=>{
              setUsuarios(respuesta);
            })
          })
    
        }
      })
    }

    return (
        <tr>       
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>{email}</td>
        <td>{userName}</td>
        <td>{password}</td>        
        <td>{_id}</td> 
        <td className='text-center'>
          <Link to={`/Administrador/EditarProducto/${_id}`}  className="btn btn-warning " >
            Editar Producto
          </Link>
          <Button variant="danger" className=' mt-2' onClick={borrarUsuario}>
            Borrar Producto
          </Button>
        </td>
      </tr>
    );
};

export default ItemUsuarios;

/*import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { consultarUsuario } from "../../components/helpers/queriesLogin";

import { borrarUsuario } from "../../components/helpers/queriesLogin";
const ItemUsuarios = ({ usuario, setUsuarios }) => {
  const { _id, userName, password, email } = { ...usuario };

  const borrarUsuarioLogin = ()=>{
  
    Swal.fire({
      title: 'Eliminar Usuario',
      text: "Desea Eliminar este Usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#520',
      cancelButtonText: 'No!',
      confirmButtonText: 'si!'
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuario(_id).then((respuesta)=>{
  
          if(respuesta.status === 200){
        Swal.fire(
          'Usuario eliminado!',
          'El usuario fue Eliminado con exito',
          'success'
        )
      }
      consultarUsuario().then((respuesta)=>{
        setUsuarios(respuesta);
      })
    })
}
})
}

  return (
    <tr>
      <td>{_id}</td>
      <td>{userName}</td>

      <td>{email}</td>
      <td>Activo</td>
      
      <td className="text-center">
        <Button variant="danger" className=" mt-2" onClick={borrarUsuarioLogin}>
          Borrar Usuario
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuarios;*/


