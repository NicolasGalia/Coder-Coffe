import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert";
import { consultarUserApi } from "../components/helpers/queriesLogin";
import { suspenderUsuario, borrarUsuarioAPI, darPermisosUser, obtenerYSuspenderUsuario, obtenerYDarPermisosUser } from "../components/helpers/queriesLogin";
import ItemUsuarios from "../views/adminUsuarios/itemUsuarios";


const Administrador = () => {
  const [productos, setProductos] = useState([]);
    useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);

        swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    consultarUserApi().then(
      (respuesta) => {
       setUsuarios(respuesta);
      },
      (reason) => {
        console.log(reason);

        swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  const borrarUsuario = (id) => {
    swal.fire({
      title: "Esta seguro?",
      text: "No podra revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuarioAPI(id).then((respuesta) => {
          if (respuesta.status === 200) {
            swal.fire(
              "Usuario eliminado",
              "El usuario fue eliminado exitosamente",
              "success"
            );
            consultarUserApi().then((users) => {
              setUsuarios(users);
            });
          }
        });
      }
    });
  };

  const suspenderUsuario = (id) => {
    swal.fire({
      title: "Esta seguro?",
      text: "Le prohibiras el login al usuario..!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Suspender",
    }).then((result) => {
      if (result.isConfirmed) {
        obtenerYSuspenderUsuario(id).then((respuesta) => {
          if (respuesta.status === 200) {
            swal.fire(
              "Usuario suspendido",
              "El usuario fue suspendido exitosamente",
              "success"
            );
          }
        });
      }
    });
  };
  const darPermisosUser = (id) => {
    swal.fire({
      title: "Esta seguro?",
      text: "Le daras permisos nuevamente al usuario...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "c0050b",
      cancelButtonColor: "#000",
      confirmButtonText: "Permitir",
    }).then((result) => {
      if (result.isConfirmed) {
        obtenerYDarPermisosUser(id).then((respuesta) => {
          if (respuesta.status === 200) {
            swal.fire(
              "Usuario con permisos nuevamente",
              "Le dimos permisos al usuario para poder acceder",
              "success"
            );
          }
        });
      }
    });
  };


  return (
    <div className="mainSection my-5 container">
      <section className="container  boxAdmin p-2 my-5 ">
        <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
          <h1 className="display-6 tituloAdmin ">PRODUCTOS</h1>
          <Link to="/CrearProducto" className="btn  btnAgregar ">
            Agregar Producto
          </Link>
        </div>
        <hr />
        <Table responsive={"sm md"}>
          <thead className="text-light text-center">
            <tr>
              <th>PRODUCTO</th>
              <th>PRECIO</th>

              <th>CATEGORIA</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody className="fw-bold text-center">
            {productos.map((producto) => (
              <ItemProducto
                key={producto._id}
                producto={producto}
                setProductos={setProductos}
              ></ItemProducto>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="container  boxAdmin p-2 my-5 mainSection">
        <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
          <h1 className="display-6 tituloAdmin ">USUARIOS REGISTRADOS</h1>
        </div>
        <hr />
        <Table responsive={"sm md"}>
          <thead className="text-light text-center">
            <tr>
              
              <th>USUARIO</th>
              <th>EMAIL</th>
              <th>Estado</th>
              <th>Permisos</th>
            </tr>
          </thead>
          <tbody className="fw-bold text-center">
            {usuarios.map((usuario) => (
              <ItemUsuarios
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
                borrarUsuario={borrarUsuario}
                darPermisosUser={darPermisosUser}
                suspenderUsuario={suspenderUsuario}
                permiso={usuario.permiso}
                nombreUsuario={usuario.nombreUsuario}
                email={usuario.email}
                estado={usuario.estado}
              ></ItemUsuarios>
             ))} 
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
