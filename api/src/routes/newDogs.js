const axios =  require("axios"); 
async function newDog (){

    const response = await axios.get("http://localhost:3001/todos-los-perros")
    const dogs = response.data ; 
const data =[]; 

for (const iterator of dogs) { 
    const temperamentos = iterator.temperaments.map(temp => temp.nombre);
    const dogsData = {
        id:iterator.id ,
        imagen:iterator.imagen ,
        nombre : iterator.nombre , 
        altura : iterator.altura ,
        peso : iterator.peso,  
        años_de_vida: iterator.años_de_vida,
        temperamento: temperamentos.join(" ,")
        
}
data.push(dogsData)
    
}; 
return data
}
 module.exports = newDog ; 

