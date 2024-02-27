import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import img from "../image/perro.png"
import "../style/HomePage.css"
import Cards from "./cards";
import FilterBar from "./filterBar";
import SerchBar from "./serchBar"
import quickSort from "./ordenamiento.js";
import  orderDes from "./ordenamientodes.js" 

function HomePage() {
  const [data, setData] = useState([]);
  const [dataBase, setDataBase] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/newdogs")
      .then((response) => response.json())
      .then((dataFromServer) => {
        setDataBase(dataFromServer); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []); 
    useEffect(() => {
      fetch("http://localhost:3001/dogs")
        .then((response) => response.json())
        .then((dataFromServer) => {
          setData(prevData => [...prevData, ...dataFromServer]); // Agrega los nuevos datos a los datos existentes en data
          setFilteredData(prevData => [...prevData, ...dataFromServer,]); // También agrega los nuevos datos a los datos filtrados
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    useEffect(() => {
      const combidata = [...data, ...dataBase];
      setAllData(combidata); 
    },[data, dataBase]) ; 

    const handleFilterChange = (selectedTemperament, selectedOrigin,  orderBy) => {
      
      let filteredResults = allData ; 
    if (selectedTemperament) {
      filteredResults = filteredResults.filter((dog) => {

        if (dog.temperamento) {
          const temperamentosDelPerro = dog.temperamento.split(',').map(temp => temp.trim());
          return temperamentosDelPerro.includes(selectedTemperament);
    }
    return false 
  })
}; 

        
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


          if(selectedOrigin === "Base de datos"){
            filteredResults = dataBase ; 
          }
          if (selectedOrigin === "api"){
            filteredResults = data ; 
          }


        }; 
        setFilteredData(filteredResults);
        
  };



  // const handlePageClick = ({ selected }) => {
  //   setCurrentPage(selected);
  // };
  const currentFilteredData = filteredData

  return (
    <div className=" contenedor ">
      <img src={img} alt="logo" />

      <SerchBar/>
      <FilterBar onFilterChange={handleFilterChange} />
      <Link to = "/fromPage">
      <button className="button">crear perro</button>
      </Link>
      <Cards characters={currentFilteredData} />

     
    </div>
  );
}

 export default HomePage;
