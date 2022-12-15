import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./views/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import PaginaPedido from "./views/PaginaPedido";
import "../src/App.css";
import Error404 from "./views/Error404";
import Login from "./views/Login";
import { useEffect, useState } from "react";
import RutasAdmin from "./routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCoderCoffe")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/pedido" element={<PaginaPedido />}></Route>
          <Route exact path="/Footer" element={<Footer />}></Route>
          <Route exact path="/AcercaNosotros" element={<AboutUs />}></Route>

          {/* aqui van las rutas protegidas */}
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

          <Route exact path="*" element={<Error404 />}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
