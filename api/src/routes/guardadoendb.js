const temperamento = require("./temperaments"); 
const {Temperaments} = require("../db.js");

async function guardartemp (){
    const temper =  await temperamento(); 
       
async function guardarStringsEnDB() {
    for (const string of temper) {
    
        try {
        await Temperaments.create({ nombre: string });
        console.log(`Guardado en la base de datos: ${string}`);
    } catch (error) {
        console.error(`Error al guardar en la base de datos: ${error.message}`);
    }

}
}
  
  guardarStringsEnDB()
    .then(() => {
      console.log('Todos los strings han sido guardados en la base de datos.');
    })
    .catch((err) => {
      console.error(`Error general: ${err.message}`);
    });
    
}

guardartemp(); 