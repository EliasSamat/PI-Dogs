const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperaments', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
nombre: {
    type: DataTypes.TEXT,
      allowNull: false,
},
    });
};