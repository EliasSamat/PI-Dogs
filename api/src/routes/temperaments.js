const dogs = require("./dogs");
const axios = require("axios");
const api_key = "live_cfhH4rjWmFSLLma4D2SyEquDOLHZ8h2ADGUbcWQbhdNes9enPnSuIsth9dFChls32";
const apiUrl = "https://api.thedogapi.com/v1/breeds";

async function obtenerTemperamentosUnicos() {
  const response = await axios.get(`${apiUrl}?api_key=${api_key}`);
  const temperamentos = response.data;

  const temperamentosUnicos = new Set();
  
  for (const perro of temperamentos) {
    if (perro.temperament) {

      const temperamentoLista = perro.temperament.split(", ");
      temperamentoLista.forEach((temperamento) => {
        temperamentosUnicos.add(temperamento);
      });
    }
  }

  const listaTemperamentosUnicos = Array.from(temperamentosUnicos);
  return listaTemperamentosUnicos;
}


module.exports = obtenerTemperamentosUnicos;
