import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert";

import ItemUsuarios from "../views/adminUsuarios/itemUsuarios";
import { consultarUsuario } from "../components/helpers/queriesLogin";

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

  // const [usuarios, setUsuarios] = useState([]);
  // useEffect(() => {
  //   consultarUsuario().then(
  //     (respuesta) => {
  //       setUsuarios(respuesta);
  //     },
  //     (reason) => {
  //       console.log(reason);

  //       swal.fire(
  //         "Ocurrio un error",
  //         "Intentelo nuevamente en unos minutos",
  //         "error"
  //       );
  //     }
  //   );
  // }, []);

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
              <th>CODIGO</th>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>URL IMAGEN</th>
              <th>CATEGORIA</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody className="fw-bold">
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
              <th>IDENTIFICADOR</th>
              <th>USUARIO</th>
              <th>EMAIL</th>
              <th>ESTATUS</th>
            </tr>
          </thead>
<<<<<<< HEAD
          {/* <tbody className="fw-bold text-center">
          {usuarios.map((usuario) => (
=======
          <tbody className="fw-bold text-center">
          {/* {usuarios.map((usuario) => (
>>>>>>> fafa4324f0e2e05a8352fafe0442e25851f0ee62
              <ItemUsuarios
                key={usuario.id}
                usuario={usuario}
                setUsuarios={setUsuarios}
<<<<<<< HEAD
              ></ItemUsuarios>
            ))}
          </tbody> */}
=======
              ></ItemUsuarios> */}
            {/* ))} */}
          </tbody>
>>>>>>> fafa4324f0e2e05a8352fafe0442e25851f0ee62
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
