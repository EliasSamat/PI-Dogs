const dogs = require("../dogs")
const dogsdb = require("../newDogs")

async function DogName (req, res){
    try{ 
        const response = await dogs (); 
        
        const datosdb = await dogsdb (); 
        const nombrequery = req.query.name ; 

        const buscaNombres = response.filter((e)=> 
        e.nombre.toLowerCase().includes(nombrequery.toLowerCase()))

        const buscaNombress = datosdb.filter((e)=> 
        e.nombre.toLowerCase().includes(nombrequery.toLowerCase())) 

        if (buscaNombres.length >= 1  && buscaNombress.length < 1 ){
            res.json(buscaNombres); 
         }else {
            res.json(buscaNombress)
         }
    }catch(error){
res.status(404).json({error: "no se encontro "})
    }

}; 
module.exports = DogName ; 