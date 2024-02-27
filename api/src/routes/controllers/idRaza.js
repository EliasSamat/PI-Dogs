const dogs = require("../dogs")

async function DogID  (req, res){
    const id = req.params.idRaza ; 
    try{    
        const response = await dogs(); 
        const filtro = response.filter((e)=> e.id == id)
        res.json(filtro);

    }catch(error){
        res.status(404).json({error: 'error no se encontro'})
    }
}; 
module.exports = DogID ; 