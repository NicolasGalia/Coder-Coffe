import "./inicio.css"
import ProductosCard from './ProductosCard';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios";

const ListaProductos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() =>{
        const getProdutos = async () =>{
            const {data} = await axios.get(`${process.env.REACT_APP_API_CODER}/productos/cafe`);
            setProductos(data);
        };
        getProdutos();
    }, []);

    return (
        <div className="containerLista">
        <h1 className="tituloLista">Lorem ipsum dolor sit amet.</h1>
        <p className="descLista">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className="wrapperLista">
            {productos.map((p) => (
                <ProductosCard producto={p} key={p._id} />
            ))}
        </div>
      </div>
    );
};

export default ListaProductos;
