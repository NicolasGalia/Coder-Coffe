import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/adminproductos/CrearProducto";
import EditarProducto from "../views/adminproductos/EditarProducto"
import Registro from "../views/Registro";


const RutasAdmin = ({ setUsuarioLogueado }) => {
  return (
    <>
      <Routes>
        {/* /administrar/ */}
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        
      </Routes>
    </>
  );
};

export default RutasAdmin;
