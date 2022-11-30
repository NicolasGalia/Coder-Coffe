import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/App.css"
import DetalleProducto from "./views/DetalleProducto"
import RutasAdmin from "./routes/RutasAdmin";
import Inicio from "./views/Inicio";
import Login from "./views/Login"
import RutasProtegidas from "./routes/RutasProtegidas"
import {useState} from "react"
import Error404 from "./views/Error404"
import Registro from "./views/Registro";
import Administrador from "./views/Administrador";
function App() {

  const usuario = JSON.parse(localStorage.getItem("tokenCafeBenito")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App">
     // administramos las rutas
    <BrowserRouter>
      {/* aqui pongo un componente que aparece en todas las paginas */}
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      {/* <Routes>
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
        <Route
          exact
          path="/registro"
          element={<Registro></Registro>}
        ></Route> */}
        {/* aqui quiero las rutas protegidas */}
        {/* <Route
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin setUsuarioLogueado={setUsuarioLogueado}></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes> */}

      <Routes>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </div>
  );
}

export default App;
