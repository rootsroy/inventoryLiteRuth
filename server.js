const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const handlebars = require("express-handlebars");
//Sets our app to use the handlebars engine

//import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

//app.listen(PORT, () =>{
//  console.log(`App listening on port ${PORT}!`);
//});
