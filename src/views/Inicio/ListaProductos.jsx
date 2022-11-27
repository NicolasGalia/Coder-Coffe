import React from 'react';
import "./inicio.css"
import ProductosCard from './ProductosCard';
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemProducto from '../adminproductos/ItemProducto';

const ListaProductos = () => {

    const {id, nombreProducto, categoria, imagen, precio} = {...producto} 
    const [productos, setProductos] = useState([]);
    useEffect(() =>{
        const getProdutos = async () =>{
            const {info} = await axios.get ('productos');
            setProductos(info);
        };
        getProdutos();
    }, []);


    return (
        <div className="containerLista">
        <h1 className="tituloLista">{...producto.nombreProducto}</h1>
        <p className="descLista">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className="wrapperLista">
        <Container className="my-5">
        <Row className="flex-column justify-content-center">
            {productos.map((p) => (
                <ProductosCard Productos={p} key={p._id} />
            ))}
        </Row>
    </Container>
        </div>
      </div>
    );
};

export default ListaProductos;



