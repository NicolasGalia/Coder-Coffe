import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../components/helpers/queriesLogin";
import "../registro.css"  
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
    <section className="formularioRegistro container">
      <div className="register">
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="m-3 p-3">
            <h2>Registrate</h2>
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
            <button className="btn" type="submit">Registrarse</button>
          </form>
        </div>
        <div className="col-6">
          <img
            src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="imagenRegistro"
          />
        </div>
      </div>
    </section>
  );
  
};

export default Login;
