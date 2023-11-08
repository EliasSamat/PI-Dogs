import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'; // Importa 'useSelector'
import Details from "./details.jsx";

function Detailpage() {
  const [data, setData] = useState([]);
  const cardId = useSelector((state) => state.cardId); // Accede al id desde Redux
  
  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${cardId}`) 
      .then((response) => response.json())
      .then((dataFromServer) => {
        setData(dataFromServer); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [cardId]);
 
  return (
    <div>
      <h1>soy el detalle </h1>
      <Details data={data} />
    </div>
  );
}

export default Detailpage;
