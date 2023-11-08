const { Router } = require('express');
const  dogs = require ("./dogs"); 
const temperamento = require("./temperaments")
const guardadatos = require("./guardadoendb")
const {Dogs, Temperaments} = require("../db.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/dogs", async function (req, res) {
    try{
        const response = await dogs(); 
        res.json(response); 
    }catch(error){
        res.status(404).json({error: 'error al buscar data '})
    }
}); 

router.get("/dogs/:idRaza", async function (req, res){
    const id = req.params.idRaza ; 
    try{    
        const response = await dogs(); 
        const filtro = response.filter((e)=> e.id == id)
        res.json(filtro);

    }catch(error){
        res.status(404).json({error: 'error no se encontro'})
    }
}); 
router.get("/dogss" , async function (req, res){
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

}); 

router.post('/dogs', async (req, res) => {
  const { id, name, height, weight, lifespan, image, temperaments } = req.body;

  try {
    // Primero, crea la raza de perro en la base de datos
    const newDog = await Dogs.create({
      id: id, 
      nombre: name,
      altura: height,
      peso: weight,
      años_de_vida: lifespan,
      imagen: image,
    });
  
    // Luego, relaciona el perro con los temperamentos indicados
    if (temperaments && temperaments.length > 0) {
      const temperamentRecords = await Temperaments.findAll({
        where: {
          name: temperaments,
        },
      });
  
      if (temperamentRecords) {
        await newDog.addTemperaments(temperamentRecords);
      }
    }
  
    return res.status(201).json({ message: 'Nuevo perro creado con éxito.' });
  } catch (error) {
    console.error('Error al crear el perro:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
  
  });

  router.get("/temperaments", async function (req, res) {
    try{ 
      const temp = await temperamento ()

     res.json(temp)

    }catch(error){
      res.status(404).json({error: "se rompio"})

    }
  })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
