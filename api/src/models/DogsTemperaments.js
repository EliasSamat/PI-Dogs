const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dogtemperaments', {
    dogId: {
      type: DataTypes.INTEGER, // Debe coincidir con la clave primaria de Dogs
      primaryKey: false,
    },
    temperamentId: {
      type: DataTypes.STRING, // Debe coincidir con la clave primaria de Temperaments
      primaryKey: false,
    },
  });
};
