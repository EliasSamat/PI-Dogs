import React from "react";
import Detail from"./detail";
function Details(props) {
  const { data } = props;

  // Ahora puedes utilizar "data" para mostrar los detalles de la tarjeta
  return (
    <div>
      {data.map((e) => (
      
        <Detail
        nombre={e.nombre}
        id ={e.id}  
        imagen={e.imagen}
        temperamento={e.temperamento}
        peso={e.peso}
        altura={e.altura}
        años_de_vida={e.años_de_vida}
        />
        
        ))}
    </div>
  );
}

export default Details;
