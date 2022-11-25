
import { Container }  from 'react-bootstrap';
import "../css/DetalleProducto.css";
import Carousel from "react-elastic-carousel"

const breakPoints=[
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:768, itemsToShow: 3},
  {width:1200, itemsToShow: 4},
]



const DetalleProducto =()=>{
  
  return (
   <Container>
    <section>
      <div className='row'>
        <Carousel breakPoints={breakPoints}>
        <div className='producto'>
          <div className='producto-thumb'>
            <a href="#"><img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a>
          </div>
            <div className='producto-body'>
              <div className='title'>
                <h6>Hamburguesa</h6>
              </div>
              <div className='precio'>
                <span>$650</span>
              </div>
              <div className='reating'>
                <div className='star'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
              </div>
              <div className='footer-card'>
                <div className='btn'>
                  <a href="#" className='btn-custom primary'>Agregar al carrito</a>
                  <a href="#" className='btn-custom secund'>Quick view</a>
                </div>
              </div>
            </div>
        </div>
        {/*producto 2*/}
        <div className='producto'>
          <div className='producto-thumb'>
            <a href="#"><img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a>
          </div>
            <div className='producto-body'>
              <div className='title'>
                <h6>Hamburguesa</h6>
              </div>
              <div className='precio'>
                <span>$650</span>
              </div>
              <div className='reating'>
                <div className='star'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
              </div>
              <div className='footer-card'>
                <div className='btn'>
                  <a href="#" className='btn-custom primary'>Agregar al carrito</a>
                  <a href="#" className='btn-custom secund'>Quick view</a>
                </div>
              </div>
            </div>
        </div>
        {/*producto 3 */}
        <div className='producto'>
          <div className='producto-thumb'>
            <a href="#"><img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a>
          </div>
            <div className='producto-body'>
              <div className='title'>
                <h6>Hamburguesa</h6>
              </div>
              <div className='precio'>
                <span>$650</span>
              </div>
              <div className='reating'>
                <div className='star'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
              </div>
              <div className='footer-card'>
                <div className='btn'>
                  <a href="#" className='btn-custom primary'>Agregar al carrito</a>
                  <a href="#" className='btn-custom secund'>Quick view</a>
                </div>
              </div>
            </div>
        </div>
        {/*producto 4*/}
        <div className='producto'>
          <div className='producto-thumb'>
            <a href="#"><img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a>
          </div>
            <div className='producto-body'>
              <div className='title'>
                <h6>Hamburguesa</h6>
              </div>
              <div className='precio'>
                <span>$650</span>
              </div>
              <div className='reating'>
                <div className='star'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
              </div>
              <div className='footer-card'>
                <div className='btn'>
                  <a href="#" className='btn-custom primary'>Agregar al carrito</a>
                  <a href="#" className='btn-custom secund'>Quick view</a>
                </div>
              </div>
            </div>
        </div>
        {/*producto 5 */}
        <div className='producto'>
          <div className='producto-thumb'>
            <a href="#"><img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a>
          </div>
            <div className='producto-body'>
              <div className='title'>
                <h6>Hamburguesa</h6>
              </div>
              <div className='precio'>
                <span>$650</span>
              </div>
              <div className='reating'>
                <div className='star'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                </div>
              </div>
              <div className='footer-card'>
                <div className='btn'>
                  <a href="#" className='btn-custom primary'>Agregar al carrito</a>
                  <a href="#" className='btn-custom secund'>Quick view</a>
                </div>
              </div>
            </div>
        </div>
        </Carousel> 
        </div>
    </section>
   </Container>
  );
}


export default DetalleProducto;