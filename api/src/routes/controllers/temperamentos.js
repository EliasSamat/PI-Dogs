const temperamento = require("../temperaments")

async function Temperamento (req, res) {
    try{ 
      const temp = await temperamento ()

     res.json(temp)

    }catch(error){
      res.status(404).json({error: "se rompio"})

    }
  }; 
  module.exports = Temperamento ; 