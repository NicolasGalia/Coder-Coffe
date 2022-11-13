import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Administrador from "./views/Administrador";

function App() {
  return (
    <div className="App">
      <>
      <Menu></Menu>
      <Administrador></Administrador>
        
<Footer></Footer>
      </>

    </div>
  );
}

export default App;
