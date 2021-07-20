// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Item } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Item model (table) by extending off Sequelize's Model class
class Item extends Model {}

// set up fields and rules for Item model
Item.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'type',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

module.exports = Item;