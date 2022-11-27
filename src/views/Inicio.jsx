import React from "react";
import { Carousel, Container } from "react-bootstrap";


const Inicio = () =>{
    return (
        <Container className="mainSection my-5">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6110830/pexels-photo-6110830.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Open 24 Hs.</h3>
          <p>Hacé tu pedido a la hora que quieras !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5903100/pexels-photo-5903100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Llegaron las mejores pizzas</h3>
          <p>Todos los topins que quieras agregar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Encontra tu combo</h3>
          <p>
           Tenemos los mejores combos para los bajones 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr></hr>
    
    </Container>
    
    );

}

export default Inicio;