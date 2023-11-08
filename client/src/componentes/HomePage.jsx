import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import img from "../image/perro.png"
import "../style/HomePage.css"
import Cards from "./cards";
import FilterBar from "./filterBar";
import SerchBar from "./serchBar"
import quickSort from "./ordenamiento.js";
import  orderDes from "./ordenamientodes.js"

function HomePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 


  const cardsPerPage = 8;

  useEffect(() => {
    fetch("http://localhost:3001/dogs")
      .then((response) => response.json())
      .then((dataFromServer) => {
        setData(dataFromServer);
        setFilteredData(dataFromServer); 
         // Inicialmente, los datos filtrados son iguales a los datos completos
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);   
    const handleFilterChange = (selectedTemperament, selectedOrigin,  orderBy) => {
          let filteredResults = data;
      
    if (selectedTemperament) {
      filteredResults = filteredResults.filter((dog) => {
      
        if (dog.temperamento) {
          const temperamentosDelPerro = dog.temperamento.split(',').map(temp => temp.trim());
          return temperamentosDelPerro.includes(selectedTemperament);
        }
        return false;
      });
    }
    const order = quickSort(filteredData)
    const ordern = orderDes(filteredData)
       
    if (orderBy) {
          if (orderBy === "A-Z") {
            filteredResults.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
          }
          if (orderBy === "Z-A") {
           filteredResults.sort((a, b) => (a.nombre < b.nombre ? 1 : -1));
         } 
          if (orderBy === "mayor") {
            filteredResults = ordern ;
          } 
          if (orderBy === "menor") {
            filteredResults = order ; 
          }
      
           
        }; setFilteredData(filteredResults);
          setCurrentPage(0); // reinicio pagina 
  };
  
  

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * cardsPerPage;
  const currentFilteredData = filteredData.slice(offset, offset + cardsPerPage);

  return (
    <div className=" contenedor ">  
        <img src={img} alt="logo" />

      <SerchBar/>
      <FilterBar onFilterChange={handleFilterChange} />
      <Link to = "/fromPage">
      <button>crear perro</button>
      </Link>
      <Cards characters={currentFilteredData} />

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredData.length / cardsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default HomePage;
