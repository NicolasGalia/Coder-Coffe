
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "react-bootstrap";
import { consultarUsuario, crearUsuario } from '../components/helpers/queriesLogin';
import Swal from "sweetalert2";
import "../views/css/registro.css"

const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (datos) => {
   
    crearUsuario(datos).then((respuesta) => {

      if (respuesta.status === 201) {
        Swal.fire("Bienvenido", "Te registraste exitosamente", "success")
      } else {
        Swal.fire("Ha ocurrido un error", "No pudimos registrate", "error")
      }
    })
  }
  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    consultarUsuario().then((respuesta) => {
      setUsuarios(respuesta)
    }, (reason) => {
   
      Swal.fire(
        "Ocurrio un error",
        "Intentelo nuevamente en unos minutos",
        "error"
      )
    })

  }, [])
  return (
    <section className='mainLogin'>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleSubmit(onSubmit)}
              id="form" className="sign-in-form">
              <div className="logo">
                <h4>Coder Coffee</h4>
              </div>

              <div className="heading">
                <h2>Bienvenido</h2>
                <h6>Ya tienes una cuenta?</h6>
                <a href="#" className="toggle"> Iniciar Sesión</a>
              </div>

              <div className="actual-form">
                {/* 1er input  nombre */}
                <div className="input-wrap">
                  <input
                    className="input-field"
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
                  <Form.Text className="label">
                    {errors.nombre?.message}
                  </Form.Text>
                </div>
                {/* 2input apellido*/}
                <div class="input-wrap">
                  <input
                    className="input-field"
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
                  <Form.Text className="label">
                    {errors.apellido?.message}
                  </Form.Text>
                </div>
                {/* 3er input */}
                <div class="input-wrap">
                  <input
                    className="input-field"
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
                  <Form.Text className="label">
                    {errors.email?.message}
                  </Form.Text>
                </div>
                {/* 4 input */}
                <div class="input-wrap">
                  <input
                    className="input-field"
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
                  <Form.Text className="label">
                    {errors.userName?.message}
                  </Form.Text>
                </div>
                {/* 5 input */}
                <div class="input-wrap">
                  <input
                    className="input-field"
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
                  <Form.Text className="label">
                    {errors.password?.message}
                  </Form.Text>
                </div>

                <button type="submit" className="sign-btn">Registrarse</button>
              </div>
            </form>
          </div>

          <div className="carousel-login">
            <div className="images-wrapper">
              <img src="https://i.postimg.cc/gkcqYp33/1-removebg-preview.png" class="image img-1 show" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Registro;