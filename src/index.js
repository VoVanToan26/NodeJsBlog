const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const app = express(); //call function object
const port = 2200;
db.connect();
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));
// template engines
app.engine(
  "hbs",
  hbs.engine({
    //config
    extname: ".hbs",
  })
);
app.set("view engine", "hbs"); // suwr dungj view engine laf hbs
app.set("views", path.join(__dirname, "resources", "views"));
app.use(express.urlencoded({ extended: true }));
//routes init
route(app);
//127.0.0.1=localhost
//
app.listen(port, () =>
  console.log(`App listening app at http://localhost:${port}`)
);
