import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { enviarPedido } from '../helpers/queriesPedido';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const ModalCustom = ({show, handleClose, title, data}) => {
  const carrito = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  const [userActive, setUserActive] = useState(false);
  const [show1, setShow] = useState(false);
  let [carritoCerrado, setCarritoCerrado] = useState(false);
  const navigate = useNavigate();
 

  const cerrarCarrito = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const pedido = {
      nombreUsuario: user.email,
      pedido: data.map(producto => ({nombre: producto.nombreProducto, precio: producto.precio, catidad: producto.quantity})),
      total: data.reduce((acc,curr) => acc + curr.precio * curr.quantity, 0),
    }
    try {
      if (carrito.length) {
        await enviarPedido(pedido);
        swal("Compra Exitosa", "Ahora puedes disfrutar de tu producto!", "success");
        localStorage.setItem("shopping-cart", JSON.stringify([]));
        handleClose();
        navigate("/");
      } else {
        swal("Error", "Elija los productos que desea comprar", "error");
        handleClose();
        navigate("/");
      }
    } catch (error) {
      swal.fire(
        "Ocurrio un error",
        "Intentelo nuevamente en unos minutos",
        "error"
      );
      
    }
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                <Table responsive={"sm md"}>
                <thead>
                  <tr>
                    <th>Img</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  {data?.map((producto) => (
                    <tr>
                    <td className="w-25"><img className="w-50" src={producto.imagen} alt="producto" /></td>
                    <td>{producto.nombreProducto}</td>
                    <td>{producto.quantity}</td>
                    <td>{producto.precio}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={cerrarCarrito}>
          Comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
