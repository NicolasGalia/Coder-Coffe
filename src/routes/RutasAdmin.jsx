import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/adminproductos/CrearProducto";
import EditarProducto from "../views/adminproductos/EditarProducto"
import Registro from "../views/Registro";



const RutasAdmin = ({ setUsuarioLogueado }) => {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Administrador />}></Route>
        <Route exact path="/CrearProducto" element={<CrearProducto />}></Route>
        <Route
          exact
          path="/EditarProducto/:id"
          element={<EditarProducto />}
        ></Route>
        <Route
          exact
          path="/registro"
          element={<Registro setUsuarioLogueado={setUsuarioLogueado} />}
        ></Route>

      </Routes>
    </>
  );
};

export default RutasAdmin;
