const {Dogs, Temperaments} = require("../../db.js")

async function perrosNuevos (req, res) {
    try {
      // Busco todos los perros en la base de datos e incluyo los temperamentos
      const perros = await Dogs.findAll({
        include: Temperaments, // Esto incluirá los temperamentos asociados con los perros
      });
  
      res.json(perros);
    } catch (error) {
      console.error("Error al obtener todos los perros:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }; 
  module.exports = perrosNuevos ; 