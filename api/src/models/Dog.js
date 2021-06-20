const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,},
    weight:{
      type: DataTypes.STRING,
      allowNull: false,},
    height:{
      type: DataTypes.STRING,
      allowNull: false,},
    life_span:{type: DataTypes.STRING},
  });
};
