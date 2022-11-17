import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert"

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

  return (
    <section className="container mainSection boxAdmin p-2 my-5">
      <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
        <h1 className="display-6 tituloAdmin ">PRODUCTOS</h1>
        <Link to="/CrearProducto" className="btn  btnAgregar ">
          Agregar Producto
        </Link>
      </div>
      <hr />
      <Table responsive={"sm md"} >
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
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
