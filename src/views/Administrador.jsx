import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import ItemProducto from './adminproductos/ItemProducto';
import { consultarAPI } from "../components/helpers/queries";
import Swal from "sweetalert";

const Administrador = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      consultarAPI().then(
        (respuesta) => {
          //la respuesta es exitosa
          setProductos(respuesta);
        },
        (reason) => {
          console.log(reason);
          //mostrar un mensaje al usuario
          Swal.fire(
            'Ocurrio un error',
            'Intentelo nuevamente en unos minutos',
            'error'
          )
        }
      );
    }, []);

    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos en Stock</h1>
          <Link  to='/CrearProducto' className="btn btn-primary" >
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {
            
            productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto> )
          }
          
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;