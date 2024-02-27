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
      allowNull: true, 
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    años_de_vida: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
    }, 
  },{
    timestamps: false, 
  });
};
 
module.exports = Dog ;  


