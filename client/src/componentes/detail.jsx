// card.js
import React from "react";
import "../style/card.css"

function detail(props) {
  return (
    
      <div >
        <p> {props.nombre}</p>
        <img src={props.imagen} alt="" />
        <p>ID:{props.id}</p>
        <p>temperamento: {props.temperamento}</p>
        <p>peso: {props.peso}KG</p>
        <p> altura: {props.altura}CM</p>
        <p> años de vida: {props.años_de_vida}</p>
      </div>
    
  );
}

export default detail;
