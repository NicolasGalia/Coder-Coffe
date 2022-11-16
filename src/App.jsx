import Menu from "./components/common/Menu";
import Footer from './components/common/Footer';
import Inicio from "./views/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <Menu></Menu>
      <Inicio></Inicio>
<Footer></Footer>
      </>

    </div>
  );
}

export default App;
