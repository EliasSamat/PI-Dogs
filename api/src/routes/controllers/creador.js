const {Dogs, Temperaments} = require("../../db.js")


async function Creador  (req, res)  {
    const { id, name, height, weight, lifespan, image } = req.body;
    console.log(req.body);
    try {
      
      const newDog = await Dogs.create({
        id: id, 
        nombre: name,
        altura: height,
        peso: weight,
        años_de_vida: lifespan,
        imagen: image,
      });
   
  
      const temperamentosNombres = req.body.temperaments;
  
  if (temperamentosNombres.length > 0) {
    const temperamentRecords = await Temperaments.findAll({
      where: {
        nombre: temperamentosNombres, // Buscar por nombres en lugar de ids
      },
    });
  
    if (temperamentRecords.length > 0) {
      // Ahora que tienes los registros de temperamentos, puedes asociarlos al perro
      await newDog.addTemperaments(temperamentRecords);
    } else {
      console.log("Los temperamentos no se encontraron en la base de datos");
    }
  }
      
  const dogWithTemperaments = await Dogs.findByPk(newDog.id, {
    include: Temperaments,
  });
  
  // dogWithTemperaments ahora contendrá el perro con sus temperamentos asociados
  ;
  
      // Retorna el nuevo perro con sus temperamentos
      return res.status(201).json({ message: 'Nuevo perro creado con éxito.', dog: dogWithTemperaments });
    } catch (error) {
      console.error('Error al crear el perro:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } ; 

  module.exports = Creador ;