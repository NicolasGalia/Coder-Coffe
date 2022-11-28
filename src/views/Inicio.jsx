import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducto from './adminproductos/CardProducto';
import { Container, Row } from 'react-bootstrap';

const Inicio = () => {
// LOGICA 
const [productos, setProductos] = useState([]);
useEffect(() =>{
    const getProdutos = async () =>{
        const {data} = await axios.get(`${process.env.REACT_APP_API_CODER}/productos/cafe`);
        setProductos(data);
    };
    getProdutos();
}, []);
    return (
        <Container className="my-5">
        <Row className="justify-content-around">
            {productos.map((p) => (
                <CardProducto producto={p} key={p._id} />
            ))}
        </Row>
    </Container>
    );
};

export default Inicio;