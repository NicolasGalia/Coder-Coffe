import ListaProductos from './Inicio/ListaProductos';
import Slider from './Inicio/Slider';
import Menu from './Inicio/Menu';

const Inicio = () => {
  const carrito = JSON.parse(localStorage.getItem('shopping-cart'));
  if (!carrito) {
    localStorage.setItem('shopping-cart', JSON.stringify([]))
  }

  return (
    <div>
      <Slider></Slider>
      <ListaProductos></ListaProductos>
      <Menu></Menu>
    </div>
  );
};

export default Inicio;



