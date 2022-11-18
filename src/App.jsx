import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import Inicio from "./views/Inicio";
import DetalleProducto from "./views/DetalleProducto"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <Menu></Menu>
      <Inicio></Inicio>
      <DetalleProducto></DetalleProducto>
      <Footer></Footer>
      </>

    </div>
  );
}

export default App;
