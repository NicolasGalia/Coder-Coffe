import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert";
import { consultarUsuario } from "../components/helpers/queriesLogin";
import ItemUsuarios from "../views/adminUsuarios/itemUsuarios";
import { consultarPedidoTodos } from "../components/helpers/queriesPedido";
import pedidoAdmin from "./adminPedido/pedidoAdmin";

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
  const [listaPedido, setListaPedido] = useState([]);
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    consultarUsuario().then(
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
    consultarPedidoTodos().then(
      (respuesta) => {
        setListaPedido(respuesta);
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
              <th>USUARIO</th>
              <th>EMAIL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="fw-bold text-center">
            {usuarios.map((usuario) => (
              <ItemUsuarios
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
              ></ItemUsuarios>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="container  boxAdmin p-2 my-5 mainSection">
        <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
          <h1 className="display-6 tituloAdmin ">PEDIDOS EN CARRITO</h1>
        </div>
        <hr />
        <Table responsive={"sm md"}>
          <thead className="text-light text-center">
            <tr>
              <th>EMAIL</th>
              <th>PRODUCTOS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody className="fw-bold text-center">
            {listaPedido.map((pedido) => (
              <pedidoAdmin email={pedido.email}
              key={pedido._id}
              pedido={pedido.pedido}
              total={pedido.total}></pedidoAdmin>
            ))}
          </tbody>
        </Table>
      </section>

      {/* <section className="container  boxAdmin p-2 my-5 mainSection">
        <div className="d-flex justify-content-between align-items-center  mt-5 ps-3 pe-3">
          <h1 className="display-6 tituloAdmin ">PEDIDOS</h1>
        </div>
        <hr />
        <Table responsive={"sm md"}>
          <thead className="text-light text-center">
            <tr>
              <th>PEDIDO</th>
              <th>CANTIDAD</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="fw-bold text-center">
          {pedido.map((pedido) => (
              <ItemProductoPedido
                key={pedido._id}
                pedido={nombreProducto}
                setPedido={setPedido}

              ></ItemProductoPedido> 
            ))} 

          </tbody>
        </Table>
      </section> */}

    </div>
  );
};

export default Administrador;
