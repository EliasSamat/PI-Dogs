// card.js
import React from "react";
import "../style/card.css"

function Card(props) {
  return (
    
      <div className="card">
        <h1> {props.nombre}</h1>
        <img src={props.imagen} alt="" />
        <p>temperamento: {props.temperamento}</p> {/* Unir los temperamentos en un solo string */}
        <p>{props.peso}KG</p>
      </div>
    
  );
}

export default Card;
