import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";
import Registro from "./views/Registro";
import CrearProducto from "./views/adminproductos/CrearProducto";
import EditarProducto from "./views/adminproductos/EditarProducto";
import PaginaPedido from "./views/PaginaPedido";
import "../src/App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu></Menu>
      <Routes>
    
    <Route exact path='/administrador' element={<Administrador/>}></Route>
    <Route exact path='/registro' element={<Registro/>}></Route>
    <Route exact path='/Menu' element={<Menu/>} ></Route>
    <Route exact path='/pedidos' element={<PaginaPedido/>} ></Route>
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
