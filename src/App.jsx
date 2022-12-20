import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/App.css";
import DetalleProducto from "./views/DetalleProducto";
import RutasAdmin from "./routes/RutasAdmin";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import RutasProtegidas from "./routes/RutasProtegidas";
import Error404 from "./views/Error404";
import Registro from "./views/Registro";
import PaginaPedido from "./views/PaginaPedido";
import "../src/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCafeBenito")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalleProducto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/pedidos"
            element={<PaginaPedido></PaginaPedido>}
          ></Route>
          aqui quiero las rutas protegidas
          <Route
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin
                  setUsuarioLogueado={setUsuarioLogueado}
                ></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Routes>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
