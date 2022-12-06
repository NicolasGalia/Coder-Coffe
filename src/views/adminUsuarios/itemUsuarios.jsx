import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { consultarUserApi } from "../../components/helpers/queriesLogin";
import { borrarUsuario } from "../../components/helpers/queriesLogin";
import { suspenderUsuario } from "../../components/helpers/queriesLogin";
import { useEffect } from "react";




  const ItemUsuarios = (props) => {
   
    useEffect(() => {
      consultarUserApi().then(respuesta => {
        props.setUsuarios(respuesta)
      })
    }, [props.usuarios, props])

  return (
    <tr>
      <td>{props.userName}</td>

      <td>{props.email}</td>
      <td className='usuario.permiso'>Activo</td>

      <td className="text-center">
        <Button variant="danger" className=" mt-2" onClick={() => props.borrarUsuario(props._id)}>
          Borrar Usuario
        </Button>
        {(props.permiso === "Suspendido") ?
        <Button variant="danger" className=" mt-2" onClick={() => props.darPermisosUser(props._id)}>
          Dar permiso
        </Button>:<Button variant="danger" className=" mt-2" onClick={() => props.suspenderUsuario(props._id)}>
          Suspender usuario
        </Button>
        }
      </td>
    </tr>
  );
};

export default ItemUsuarios;
