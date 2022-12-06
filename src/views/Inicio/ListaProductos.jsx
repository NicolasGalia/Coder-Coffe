import "./inicio.css";
import ProductosCard from "./ProductosCard";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { editarPedidoBD } from "../../components/helpers/queriesPedido";

// USUARIO FALSO BORRAR
let usuarioFalso = {
    nombreUsuario: "Edu",
    idUsuario: 5484212,
    apellido: "Ross"


}

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [pedido, setPedido] = useState();


  


  useEffect(() => {
    const getProdutos = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_CODER}/productos/cafe`
      );
      setProductos(data);
    };
    getProdutos();
    getPedido();
    
  }, []);



  const getPedido = async () => {
    const pedido = await axios.get(
      `${process.env.REACT_APP_API_CODER}/pedidos/`, {
          params: {
            nombreUsuario: usuarioFalso.nombreUsuario
          }
        }
    );
    setPedido(pedido.data);
  };

  let actualizarPedido = (producto, precio) => {

      let pedidoActualizado = {
        _id: pedido._id,
        nombreUsuario: pedido.nombreUsuario,
        pedido: [...pedido.pedido, { nombre: producto, precio: precio }],
        total: pedido.total + precio,
        __v: pedido.__v,
      };
      setPedido(pedidoActualizado);
      editarPedidoBD(pedido._id, pedidoActualizado)

  };

  return (
    <div className="containerLista">
      <div className="t-heading">
        <span>Elegi tu producto </span>
        <span className="equipo"> preferido</span>
        <div className="blur t-blur1"></div>
        <div className="blur t-blur2"></div>
      </div>
      <p className="descLista">
        Sabemos lo que es comer bien, elegi tu producto Coder Coffe y lo
        preparamos al instante.
      </p>
      <div className="wrapperLista">
        {productos.map((p) => (
          <ProductosCard
            actualizarPedidoprops={actualizarPedido}
            producto={p}
            key={p._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
