const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
  const Dog = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
    },
    peso: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
    },
    años_de_vida: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
    },
  },{
    timestamps: false, // Desactiva la generación automática de createdAt y updatedAt
  });
};
module.exports = Dog ;  



// ID.*
// Imagen.*
// Nombre.*
// Altura.*
// Peso.*
// Años de vida.*