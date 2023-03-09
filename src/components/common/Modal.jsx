import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCustom = ({show, handleClose, title, data}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
            {data?.map(item => <li>
                {item.name}
            </li>)}
        </ul>
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
