import { Tab,Nav, Col, Row, Container } from "react-bootstrap";



const DetalleProducto =()=>{
  return (
    <Container>
      <div className="mcd-content">
        <div className="mcd-products-block">
          <div className="mcd-container">
           <Nav role='navigation' className="mcd-category d-flex">
            <aside className="mcd-category-menu">
              <a href="/productos" className="mcd-section" aria-current ='page'>
                <img src="https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagen-category"/>
                Nuestros productos
              </a>
              <div className="mcd-category-section-menu">
                <div className="column-category">
                  <div className="column-mobile">
                    <a href="/productos" className="mcd-category-menu-item" aria-current="page">
                      <img src="https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-category" />
                    Nuestros productos
                    </a>
                  </div>
                  <div className="hamburguesas"> 
                    <a href="/productos/hamburguesas" className="item-hamburguesas">
                      <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagen-hamburguesas" />
                    Hamburguesas
                    </a>
                  </div>
                  <div className="sandwiches">
                    <a href="/productos/sandwiches" className="item-sandwiches">
                      <img src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="imagen-sandwiches"/>
                    Sándwiches
                    </a>
                  </div>
                  <div className="pizzas">
                    <a href="/productos/pizzas" className="item-pizzas">
                      <img src="https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="imagen-pizzas"/>
                    Pizzas
                    </a>
                  </div>
                  <div className="bebidas">
                    <a href="/productos/bebidas" className="item-bebidas">
                      <img src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="imagen-bebidas"/>
                    Bebidas
                    </a>
                  </div>
                </div>
              </div>
            </aside>
            <div className="mcd-container-detalle">
              <div className="mcd-home ms-20px"></div>
            </div>
           </Nav>
          </div>
        </div>
      </div>
    </Container>
  )
}


export default DetalleProducto;