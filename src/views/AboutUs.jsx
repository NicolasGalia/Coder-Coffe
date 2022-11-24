import React from 'react';
import "./Acerca-de-nosotros/acercaNosotros.css";
import Bienvenidos from './Acerca-de-nosotros/Bienvenidos';
import InfoLocal from './Acerca-de-nosotros/InfoLocal';
import Participantes from './Acerca-de-nosotros/Participantes';


const AboutUs = () => {
  return (
    <div>
      <Bienvenidos></Bienvenidos>
      <InfoLocal></InfoLocal>
      <Participantes></Participantes>
     </div>
    )
};
export default AboutUs;



