import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
import { crearUsuario } from '../components/helpers/queriesLogin';
import logoBgTransparente from "../img/logoBgTransparent.png"
import "../views/css/registro.css"


const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
    crearUsuario(datos).then((respuesta) => {
     
if(respuesta.status === 201){
        Swal.fire("Bienvenido", "Te registraste exitosamente", "success")
      }else{
        Swal.fire("Ha ocurrido un error", "No pudimos registrate","error")
      }
    })
  }
  // const [usuarios, setUsuarios] = useState([])

  // useEffect(() => {
  //   consultarUsuario().then((respuesta) => {
  //     setUsuarios(respuesta)
  //   }, (reason) => {
  //     console.log(reason);
  //     Swal.fire(
  //       "Ocurrio un error",
  //       "Intentelo nuevamente en unos minutos",
  //       "error"
  //     )
  //   })

  // }, [])


  return (
    <section className="formularioRegistro">
      <div className="register">
        <div className="col-6">
          <div className="m-3 p-3">
            <h2 className='registroTitulo'>Registrate</h2>
            <span>Unite a coder coffe y disfruta de nuestros servicios</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="flex flex-col"
          >
            <input
              type="text"
              {...register("nombre", {
                required: "Debe ingresar un nombre",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe tener mas de 30 caracteres",
                },
                pattern: {
                  value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                  message: "Debe ingresar un nombre valido",
                },
              })}
              placeholder="nombre"
            />
            <Form.Text className="text-danger mb-2">
              {errors.nombre?.message}
            </Form.Text>
            <input
              type="text"
              {...register("apellido", {
                required: "Debe ingresar un apellido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe tener mas de 30 caracteres",
                },
                pattern: {
                  value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                  message: "Debe ingresar un apellido valido",
                },
              })}
              placeholder="apellido"
            />
            <Form.Text className="text-danger mb-2">
              {errors.apellido?.message}
            </Form.Text>
            <input
              type="text"
              {...register("email", {
                required: "Debe ingresar un email",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Debe ingresar un formato valido",
                },
              })}
              placeholder="email"
            />
            <Form.Text className="text-danger mb-2">
              {errors.email?.message}
            </Form.Text>
            <input
              type="text"
              {...register("userName", {
                required: "Debe ingresar un nombre de usuario",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre no debe tener mas de 30 caracteres",
                },
                pattern: {
                  value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                  message: "Debe ingresar un nombre de usuario valido",
                },
              })}
              placeholder="nombre de usuario"
            />
            <Form.Text className="text-danger mb-2">
              {errors.userName?.message}
            </Form.Text>
            <input
              type="text"
              {...register("password", {
                required: "Debe ingresar una contraseña",
                minLength: {
                  value: 8,
                  message: "Su contraseña debe tener al menos 8 caracteres",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Su contraseña debe tener como 30 caracteres como maximo",
                },
              })}
              placeholder="contraseña"
            />
            <Form.Text className="text-danger mb-2">
              {errors.password?.message}
            </Form.Text>
            <button className="btn" type="submit">Registrarse</button>
          </form>
        </div>
        <div className="col-6">
          <img
            src= {logoBgTransparente}
            alt=""
            className="imagenRegistro"
          />
        </div>
      </div>
    </section>
  );
};

export default Registro;