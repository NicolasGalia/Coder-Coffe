import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
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
      <td>{userName}</td>

      <td>{email}</td>
      <td>Activo</td>
      
      <td className="text-center">

        <Button variant="danger" className=" mt-2 btn-sm btn-block" onClick={borrarUsuarioLogin}>

          Borrar Usuario
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuarios;
