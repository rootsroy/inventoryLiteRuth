const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Type extends Model {}

Type.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'type',
  }
);

module.exports = Type;
