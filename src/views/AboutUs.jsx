import React from 'react';
import "./Acerca-de-nosotros/acercaNosotros.css";
import Bienvenidos from './Acerca-de-nosotros/Bienvenidos';
import CardsMiembros from './Acerca-de-nosotros/CardsMiembros';
import InfoLocal from './Acerca-de-nosotros/InfoLocal';
// import Participantes from './Acerca-de-nosotros/Participantes';


const AboutUs = () => {
  return (
    <div>
      <Bienvenidos></Bienvenidos>
      <InfoLocal></InfoLocal>
      {/* <Participantes></Participantes> */}
      <CardsMiembros></CardsMiembros>

     </div>
    )
};
export default AboutUs;



