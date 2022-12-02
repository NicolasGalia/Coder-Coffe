import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
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
import CrearProducto from "./views/adminproductos/CrearProducto";
import EditarProducto from "./views/adminproductos/EditarProducto";
function App() {

  const usuario = JSON.parse(localStorage.getItem("tokenCoderCofee")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App">
     
    <BrowserRouter>
      {/* aqui pongo un componente que aparece en todas las paginas */}
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
    
    <Route exact path='/' element={<Inicio/>}></Route>
    <Route exact path='/administrador' element={<Administrador/>}></Route>
    <Route exact path='/registro' element={<Registro/>}></Route>
    <Route exact path='/Menu' element={<Menu/>} ></Route>
    <Route exact path='/Footer' element={<Footer/>} ></Route>
  <Route exact path='/CrearProducto' element={<CrearProducto/>}></Route>
  <Route exact path='/Administrador/EditarProducto/:id' element={<EditarProducto/>}></Route>
    


</Routes>
        
<Footer></Footer>
</BrowserRouter>

       
    </div>
  );
}

export default App;
