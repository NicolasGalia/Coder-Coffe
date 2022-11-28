import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import Inicio from "./views/Inicio";
// import DetalleProducto from "./views/DetalleProducto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";
import Registro from "./views/Registro";
import CrearProducto from "./views/adminproductos/CrearProducto";
import EditarProducto from "./views/adminproductos/EditarProducto";
import AboutUs from "./views/AboutUs";
import "../src/App.css"
import Error404 from "./views/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu></Menu>
      <Routes>
    
    <Route exact path='/' element={<Inicio/>}></Route>
    <Route exact path='/administrador' element={<Administrador/>}></Route>
    <Route exact path='/registro' element={<Registro/>}></Route>
    <Route exact path='/Menu' element={<Menu/>} ></Route>
    <Route exact path='/Footer' element={<Footer/>} ></Route>
  <Route exact path='/CrearProducto' element={<CrearProducto/>}></Route>
  <Route exact path='/AcercaNosotros' element={<AboutUs/>}></Route>
  <Route exact path='/Error404' element={<Error404/>}></Route>
  <Route exact path='/Administrador/EditarProducto/:id' element={<EditarProducto/>}></Route>
    


</Routes>
        
<Footer></Footer>
</BrowserRouter>

    </div>
  );
}

export default App;
