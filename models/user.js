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

    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'

module.exports = User;