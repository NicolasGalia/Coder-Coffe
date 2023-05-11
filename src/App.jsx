import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/App.css";
import DetalleProducto from "./views/DetalleProducto";
import { RutasAdmin } from "./routes/RutasProtegidas";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Error404 from "./views/Error404";
import Registro from "./views/Registro";
import PaginaPedido from "./views/PaginaPedido";
import "../src/App.css";
import { useEffect, useState } from "react";
import ItemUsuarios from "./views/adminUsuarios/itemUsuarios";
import Administrador from "./views/Administrador";
import CrearProducto from "./views/adminproductos/CrearProducto";
import AboutUs from "./views/AboutUs";
import EditarProducto from "./views/adminproductos/EditarProducto";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCafeBenito")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App quitarScroll">
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>

        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route
            exact
            path="/administrador"
            element={
              <RutasAdmin>
                <Administrador />
              </RutasAdmin>
            }
          ></Route>
          <Route exact path="/registro" element={<Registro />}></Route>
          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/pedido" element={<PaginaPedido />}></Route>
          <Route exact path="/Footer" element={<Footer />}></Route>
          <Route exact path="/itemUsuario" element={<ItemUsuarios />}></Route>
          <Route
            exact
            path="/CrearProducto"
            element={<CrearProducto />}
          ></Route>
          <Route exact path="/AcercaNosotros" element={<AboutUs />}></Route>
          <Route exact path="/Error404" element={<Error404 />}></Route>
          <Route exact path="/Inicio" element={<Login />}></Route>
          <Route
            exact
            path="/Administrador/EditarProducto/:id"
            element={<EditarProducto />}
          ></Route>
          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/Footer" element={<Footer />}></Route>
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
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
