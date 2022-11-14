import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";
import CrearProducto from "./views/adminproductos/CrearProducto";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu></Menu>
      <Routes>
    
    <Route exact path='/Administrador' element={<Administrador></Administrador>}></Route>
    
    <Route exact path='/Menu' element={<Menu></Menu>} ></Route>
    <Route exact path='/Footer' element={<Footer></Footer>} ></Route>
  <Route exact path='/CrearProducto' element={<CrearProducto></CrearProducto>} ></Route>
    


</Routes>
        
<Footer></Footer>
</BrowserRouter>

    </div>
  );
}

export default App;
