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
    <section className="formularioRegistro container text-center">
      <div className="register">
        <div className="col-12">
          <div className="m-3 p-3">
            <h2>Iniciar Sesión</h2>
            <span>Unite a coder coffe y disfruta de nuestros servicios</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="flex flex-col"
          >
            
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
            <button className="btn" type="submit">Iniciar Sesión</button>
          </form>
        </div>
       
      </div>
    </section>
  );
  
};

export default Login;
