import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCustom = ({show, handleClose, title, data}) => {
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
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
