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
    <section className="container">
      <div className="screen">
        <div className="screen__content">
          
          <form onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="login"
          >
            <h2>Bienvenido</h2>
            <div class="login__field">
            <i class="login__icon bi bi-person-circle"></i>
              <input
                className="login__input"
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
            <div class="login__field">
            <i class="login__icon bi bi-lock"></i>
              <input
                class="login__input"
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
            <button class="button login__submit" type="submit">
              <span class="button__text">Iniciar sesión</span>
              <i class="button__icon bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </section>
  );

};

export default Login;









