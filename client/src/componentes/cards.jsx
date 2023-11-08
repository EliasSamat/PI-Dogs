import React from "react";
import Card from "./card"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCardId } from './redux/actions.js'; // Importa la acción que definiste

function Cards(props) {
  const dispatch = useDispatch();

  const { characters } = props;
  return (
    <div>
      {characters.map((e) => (
        <Link
          to={`/detail/${e.id}`}
          onClick={() => dispatch(setCardId(e.id))} // Envia el id a Redux al hacer clic en el enlace
        >
          <Card
            nombre={e.nombre}
            id={e.id}
            imagen={e.imagen}
            temperamento={e.temperamento}
            peso={e.peso}
            altura={e.altura}
            años_de_vida={e.años_de_vida}
          />
        </Link>
      ))}
    </div>
  );
}

export default Cards;
