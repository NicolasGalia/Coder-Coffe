import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";

const ItemProductoPedido = ({ nombreProducto, precio, id, borrarProductoprop}) => {
  const borrarProducto = (id)=>{

  }

  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        <h1 className="w-100 fs-5">{nombreProducto}</h1>
        <h2 className="fs-5 display-5 text-center">
          ${precio}
        </h2>
          <Button className="bg-danger btn-sm w-25 ms-3">
            <i className="text-light bi bi-trash3-fill" onClick={()=>{Swal.fire({
  title: '¿Quitar producto?',
  text: "¿Esta seguro que desea eliminar este producto de su pedido?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#F2DEA2',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, quitar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Eliminado',
      'Su pedido fue actualizado',
      'success'
    )
    borrarProductoprop(id, precio)
  }
})}}></i>
            
          </Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemProductoPedido;
