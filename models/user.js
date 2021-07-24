const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
        //use the special Sequelize DataTypes object provide what type of data it is supposed
        type: DataTypes.INTEGER,
        // this is the equivalanet of Sqls 'not null' option
        allowNull: false,
        // instruct that this is the Primary Key column
        primaryKey: true,
        //turn on autoIncrement
        autoIncrement: true
    },
    // define a username columns
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // there cannot be any duplicate email values in this Table
        unique: true,
        // if allowNull is set to false, we can run data through validators before creating table
         validate:{
             isEmail: true
            }
            },
    // define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least 4 characters
            len: [4]
        }
    }
  },
  {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelNamer: 'user'
  }
);

module.exports = User;