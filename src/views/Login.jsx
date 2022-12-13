import React from "react";
import { Button, Form } from "react-bootstrap";
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
      if (respuesta.status === 200) {
        Swal.fire(
          "Bienvenido",
          `Gracias por contar con nosotros, ${datos.email}`,
          "success"
        );
        localStorage.setItem(
          "tokenCoderCofee",
          JSON.stringify(respuesta)
        );
        setUsuarioLogueado(respuesta)
        navigate("/Inicio");
      } else {
        Swal.fire(
          "Error",
          `Contraseña incorrecta, vuelva a intentarlo`,
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
                    <form action="index.html" autocomplete="off" className="sign-in-form">
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
                                <Form.Text className="text-danger mb-2">
                                    {errors.email?.message}
                                </Form.Text>
                            </div>
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
                                <Form.Text className="text-danger mb-2">
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

                <div className="carousel">
                    <div className="images-wrapper">
                        <img src="https://i.postimg.cc/gkcqYp33/1-removebg-preview.png" class="image img-1 show" alt="" />
                    </div>

                    <div className="text-slider">
                        <div className="text-wrap">
                            <div className="text-group">
                                <h2>Ingresar con</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
};
export default Login;









