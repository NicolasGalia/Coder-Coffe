import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
import { consultarUsuario, crearUsuario } from '../components/helpers/queriesLogin';
import "../views/css/registro.css"
import logoBgTransparente from "../img/logoBgTransparent.png"
import RegistroPrueba from './RegistroPrueba';

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
    <RegistroPrueba></RegistroPrueba>
//     <div className="container">
//     <div className="screen">
//         <div className="screen__content">
//             <form onSubmit={handleSubmit(onSubmit)}
//                 id="form"
//                 className="login"
//             >
//                 {/* 1er imput */}
//                 <div className="login__field">
//                     <input
//                         className="login__input"
//                         type="text"
//                         {...register("nombre", {
//                             required: "Debe ingresar un nombre",
//                             minLength: {
//                                 value: 3,
//                                 message: "El nombre debe tener al menos 3 caracteres",
//                             },
//                             maxLength: {
//                                 value: 30,
//                                 message: "El nombre no debe tener mas de 30 caracteres",
//                             },
//                             pattern: {
//                                 value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
//                                 message: "Debe ingresar un nombre valido",
//                             },
//                         })}
//                         placeholder="nombre"
//                     />
//                     <Form.Text className="text-danger mb-2">
//                         {errors.nombre?.message}
//                     </Form.Text>
//                 </div>
//                 {/* 2imput */}
//                 <div className="login__field">
//                     <input
//                         className="login__input"
//                         type="text"
//                         {...register("apellido", {
//                             required: "Debe ingresar un apellido",
//                             minLength: {
//                                 value: 3,
//                                 message: "El nombre debe tener al menos 3 caracteres",
//                             },
//                             maxLength: {
//                                 value: 30,
//                                 message: "El nombre no debe tener mas de 30 caracteres",
//                             },
//                             pattern: {
//                                 value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
//                                 message: "Debe ingresar un apellido valido",
//                             },
//                         })}
//                         placeholder="apellido"
//                     />
//                     <Form.Text className="text-danger mb-2">
//                         {errors.apellido?.message}
//                     </Form.Text>
//                 </div>
//                 <div className="login__field">
//                     <input
//                         className="login__input"
//                         type="text"
//                         {...register("email", {
//                             required: "Debe ingresar un email",
//                             pattern: {
//                                 value:
//                                     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
//                                 message: "Debe ingresar un formato valido",
//                             },
//                         })}
//                         placeholder="email"
//                     />
//                     <Form.Text className="text-danger mb-2">
//                         {errors.email?.message}
//                     </Form.Text>
//                 </div>
//                 <div className="login__field">
//                     <input
//                         className="login__input"
//                         type="text"
//                         {...register("userName", {
//                             required: "Debe ingresar un nombre de usuario",
//                             minLength: {
//                                 value: 3,
//                                 message: "El nombre debe tener al menos 3 caracteres",
//                             },
//                             maxLength: {
//                                 value: 30,
//                                 message: "El nombre no debe tener mas de 30 caracteres",
//                             },
//                             pattern: {
//                                 value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
//                                 message: "Debe ingresar un nombre de usuario valido",
//                             },
//                         })}
//                         placeholder="nombre de usuario"
//                     />
//                     <Form.Text className="text-danger mb-2">
//                         {errors.userName?.message}
//                     </Form.Text>
//                 </div>
//                 <divn className="login__field">
//                 <input
//                    className="login__input"
//               type="text"
//               {...register("password", {
//                 required: "Debe ingresar una contraseña",
//                 minLength: {
//                   value: 8,
//                   message: "Su contraseña debe tener al menos 8 caracteres",
//                 },
//                 maxLength: {
//                   value: 30,
//                   message:
//                     "Su contraseña debe tener como 30 caracteres como maximo",
//                 },
//               })}
//               placeholder="contraseña"
//             />
//             <Form.Text className="text-danger mb-2">
//               {errors.password?.message}
//             </Form.Text>
//                 </divn>
//                 <button className="button login__submit" type="submit">
//                     <span className="button__text">Log In Now</span>
//                 </button>
//             </form>
//         </div>
//         <div className="screen__background">
//             <span className="screen__background__shape screen__background__shape4"></span>
//             <span className="screen__background__shape screen__background__shape3"></span>
//             <span className="screen__background__shape screen__background__shape2"></span>
//             <span className="screen__background__shape screen__background__shape1"></span>
//         </div>
//     </div>
// </div>
  );
};

export default Registro;

