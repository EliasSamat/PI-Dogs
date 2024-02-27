const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
   
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