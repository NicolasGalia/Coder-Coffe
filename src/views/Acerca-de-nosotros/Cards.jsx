import React from "react";
import "./acercaNosotros.css"

const Cards = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Cards;   