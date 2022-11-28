import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";
import CrearProducto from "./views/adminproductos/CrearProducto";
import EditarProducto from "./views/adminproductos/EditarProducto";
import "../src/App.css";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCoderCoffe")) || {};  
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route
            exact
            path="/administrador"
            element={<Administrador />}
          ></Route>

          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/Footer" element={<Footer />}></Route>
          <Route
            exact
            path="/CrearProducto"
            element={<CrearProducto />}
          ></Route>
          <Route
            exact
            path="/Administrador/EditarProducto/:id"
            element={<EditarProducto />}
          ></Route>

          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
