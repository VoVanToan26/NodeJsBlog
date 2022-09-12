const express = require("express");
const path =require("path");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express(); //call function object
const port = 2200;

app.use(morgan("combined"));


// template engines 
app.engine("hbs", hbs.engine({
  //config
  extname:'.hbs'
}));
app.set("view engine", "hbs"); // suwr dungj view engine laf hbs
console.log("PATH",path.join(__dirname, "resources/views/"));
app.set("views", path.join(__dirname, "resources/views/"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.render("home");
});
//127.0.0.1=localhost

app.listen(port, () =>
  console.log(`example listening app at http://localhost:${port}`)
);
