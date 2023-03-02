import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../components/helpers/queriesLogin";
import "../views/css/registro.css"

const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    login(datos).then((respuesta) => {
      if (respuesta.token) {
        Swal.fire(
          "Bienvenido",
          `Gracias por contar con nosotros, ${datos.email}`,
          "success"
        );
        localStorage.setItem(
          "tokenCoderCofee",
          JSON.stringify(respuesta.token)
        );
        console.log(respuesta);
        setUsuarioLogueado(respuesta)

        navigate("/");

      } else {
        Swal.fire(
          "Error",
          `Credenciales inválidas, vuelva a intentarlo`,
          "error"
        );
      }
    });
  };

  return (
    <section className='mainLogin'>
        <div className="box">
            <div className="inner-box">
                <div className="forms-wrap">
                    <form onSubmit={handleSubmit(onSubmit)} id="form" className="sign-in-form">
                        <div className="logo">
                            <h4>Coder Coffee</h4>
                        </div>

                        <div className="heading">
                            <h2>Bienvenido</h2>
                            <h6>No tienes una cuenta?</h6>
                            <a href="#" className="toggle"> Registrate</a>
                        </div>

                        <div className="actual-form">
                            <div className="input-wrap">
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
                            <div className="input-wrap">
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

                            <button type="submit" className="sign-btn">Iniciar Sesion</button>

                            <p className="text">
                                Olvidaste tu contraseña o mail?
                                <a href="#"> Click aquí</a> Para obtener ayuda
                            </p>
                        </div>
                    </form>
                </div>

                <div className="carousel-login">
                    <div className="images-wrapper">
                        <img src="https://i.postimg.cc/gkcqYp33/1-removebg-preview.png" className="image img-1 show" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

);
};
export default Login;









