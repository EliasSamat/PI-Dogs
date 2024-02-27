const dogs = require("../dogs")


async function Dog (req, res) {
    try{
        const response = await dogs(); 
        res.json(response); 
    }catch(error){
        res.status(404).json({error: 'error al buscar data '})
    }
}

module.exports = Dog ; 