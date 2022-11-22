import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../registro.css";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../components/helpers/queriesLogin";

const Registro = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
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
                  message: "Debe ingresar un nombre valido",
                },
              })}
              placeholder="apellido"
            />
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password")}
              placeholder="contraseña"
            />
            <button className="btn">Registrarse</button>
          </form>
        </div>
        <div className="col-2">
          <img
            src="https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Registro;
