import React, { useState, useEffect } from "react";
import Cards from "./cards";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]); // Nuevo estado para los resultados de búsqueda

  useEffect(() => {
    fetch(`http://localhost:3001/dogss?name=${searchTerm}`)
      .then((response) => response.json())
      .then((dataFromServer) => {
        setData(dataFromServer);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
   
    setSearchedData(data);
  };

  return (
    <div className="contenedor">
      <input
        className="barra"
        type="text"
        placeholder="Ingresa el nombre"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button className="botonn" onClick={handleSearchClick}>
        🔎
      </button>

      <h1>Encontramos esto. . .</h1>
      <Cards characters={searchedData} /> {/* Mostrar los resultados de la búsqueda */}
    </div>
  );
}

export default SearchBar;
