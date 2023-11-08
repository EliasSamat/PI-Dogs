const axios = require("axios"); 
const api_key = "live_cfhH4rjWmFSLLma4D2SyEquDOLHZ8h2ADGUbcWQbhdNes9enPnSuIsth9dFChls32"; 
const apiUrl = "https://api.thedogapi.com/v1/breeds"
async function dogs (){
  
    const response = await axios.get(`${apiUrl}?api_key=${api_key}`)
  const dogs = response.data ; 
  const data = []

  for (const iterator of dogs) {
    const peso = { peso : iterator.weight}
    const altura = {altura : iterator.height}
    const dogsData = {
                     id:iterator.id ,
                     imagen:`http://cdn2.thedogapi.com/images/${iterator.reference_image_id}.jpg` ,
                     nombre : iterator.name , 
                     altura : altura.altura.metric ,
                     peso : peso.peso.metric, 
                     vida: iterator.life_span,
                     temperamento: iterator.temperament,
                     años_de_vida : iterator.life_span
    }
    data.push(dogsData)
  }
  return data ; 
 }
 
 module.exports = dogs ; 