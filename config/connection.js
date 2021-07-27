//create connection to our database, pass Mysql info for username + pw 
const Sequelize= require('sequelize');
require ('dotenv').config();
//create connection to our DB_NAME
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW {
  hist: 'localhost',
  dialect: 'mysql',
  port:3306
});

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
