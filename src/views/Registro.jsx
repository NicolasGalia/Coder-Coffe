import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { consultarUsuario } from '../components/helpers/queriesLogin';

const Registro = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    consultarUsuario().then((respuesta) => {
      setUsuarios(respuesta)
    }, (reason) => {
      console.log(reason);
      Swal.fire(
        "Ocurrio un error",
        "Intentelo nuevamente en unos minutos",
        "error"
      )
    })

  }, [])


  return (
    <div>

    </div>
  );
};

export default Registro;