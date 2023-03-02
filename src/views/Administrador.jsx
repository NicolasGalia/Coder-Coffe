import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ItemProducto from "./adminproductos/ItemProducto";
import { consultarAPI } from "../components/helpers/queries";
import swal from "sweetalert";
import { consultarUsuario } from "../components/helpers/queriesLogin";
import ItemUsuarios from "../views/adminUsuarios/itemUsuarios";
import { consultarPedidoTodos } from "../components/helpers/queriesPedido";

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
      <section className="container boxAdmin p-2 my-5">
        <div className="d-flex justify-content-between align-items-center mt-5 ps-3 pe-3">
          <h1 className="display-6 tituloAdmin">PEDIDOS EN CARRITO</h1>
        </div>
        <hr />
      </section>
      <div className="container">
        <div className="row">
          {listaPedido.map((pedido) => (
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Body>
                <Card.Title>Usuario: {pedido.email}</Card.Title>
                <Card.Text>
                  <ul>
                    {pedido.pedido.map((p) => (
                      <li>{`${p.nombre} -- Precio: ${p.precio}`}</li>
                    ))}
                  </ul>
                  <Button key={pedido.id} variant="primary">
                    Total <Badge bg="secondary">{pedido.total}</Badge>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Administrador;
