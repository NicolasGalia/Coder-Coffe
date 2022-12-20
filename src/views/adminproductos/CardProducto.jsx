import React, {useState} from "react";
import { Button, Card, Modal } from "react-bootstrap";



const CardProducto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="producto">
    <div className="producto-thumb">
      <a href="#">
        <img
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </a>
    </div>
    <div className="producto-body">
      <div className="title">
        <h6>Hamburguesa</h6>
      </div>
      <div className="precio">
        <span>$650</span>
      </div>
      <div className="footer-card">
        <div className="btn">
          <a href="#" className="btn-custom primary">
            Agregar al carrito
          </a>
        </div>
        <div>
          <>
            <Button variant="primary" onClick={handleShow}>
            Ver detalle
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </div>
  </Card>
  );
};

export default CardProducto;