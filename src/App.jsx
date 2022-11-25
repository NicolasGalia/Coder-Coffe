import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import Inicio from "./views/Inicio";
import DetalleProducto from "./views/DetalleProducto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";
import CrearProducto from "./views/adminproductos/CrearProducto";
import EditarProducto from "./views/adminproductos/EditArProducto";
import "../src/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu></Menu>
      <Routes>
    
    <Route exact path='/administrador' element={<Administrador/>}></Route>
    
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
