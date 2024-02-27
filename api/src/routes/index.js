const { Router } = require('express');
const  dogs = require ("./dogs");  
const newDog = require("./newDogs")
const guardadatos = require("./guardadoendb")
const Dog = require("./controllers/dog.js")
const DogID = require("./controllers/idRaza.js")
const DogName = require("./controllers/dogName.js")
const Creador = require("./controllers/creador.js") 
const temperamento = require("./controllers/temperamentos.js")
const perrosNuevos = require ("./controllers/perrosNuevos.js")
const buscadorDB = require ("./controllers/buscadorDB.js") 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
            
         router.get("/dogs", Dog ); 
          router.get("/dogs/:idRaza",DogID ); 
           router.get("/dogss",DogName ); 
            router.post('/dogs',Creador);
             router.get("/temperaments",temperamento ) ; 
              router.get("/todos-los-perros",perrosNuevos );
               router.get("/db",buscadorDB) ; 
  router.get("/newDogs" ,async function (req, res ) {
    try{ 
      const data = await newDog (); 
      res.json(data); 

    }catch(error){
      res.status(404).json({error: "error en el servidor"})
    }
  })
  
 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
