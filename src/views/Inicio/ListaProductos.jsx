import "./inicio.css"
import ProductosCard from './ProductosCard';
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
       <div className="t-heading">
        <span>Elegi tu producto </span>
        <span className='equipo'> preferido</span>
      <div className="blur t-blur1" ></div>
      <div className="blur t-blur2"></div>
      </div>
        <p className="descLista">
        Sabemos lo que es comer bien, elegi tu producto Coder Coffe y lo preparamos al instante.
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
