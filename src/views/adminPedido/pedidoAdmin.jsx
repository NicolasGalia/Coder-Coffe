import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const pedidoAdmin = ({ email, pedido, total }) => {
  return (
    <tr>
      <td>{email}</td>
      <td></td>
      <td>{total}</td>
      <td className="text-center">
        <Link className="btn btn-warning ">Editar Producto</Link>
        <Button variant="danger" className=" mt-2">
          Borrar Producto
        </Button>
      </td>
    </tr>
  );
};

export default pedidoAdmin;
