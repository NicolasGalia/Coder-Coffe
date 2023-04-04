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
          path="/CrearProducto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/EditarProducto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route exact path="/registro" element={<Registro setUsuarioLogueado ={setUsuarioLogueado }></Registro>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
