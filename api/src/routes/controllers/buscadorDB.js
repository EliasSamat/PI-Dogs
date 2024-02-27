const dogs = require("../newDogs")

async function DogName (req, res){
    try{
        const response = await dogs (); 
        const nombrequery = req.query.name ; 
        const buscaNombres = response.filter((e)=> 
        e.nombre.toLowerCase().includes(nombrequery.toLowerCase()))
        if (buscaNombres.length >= 1){
            res.json(buscaNombres); 
         }
    }catch(error){
res.status(404).json({error: "no se encontro "})
    }

}; 
module.exports = DogName ; 