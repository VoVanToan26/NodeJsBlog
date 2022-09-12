const express = require("express"); //
const app = express(); //call function object
const port = 2200;
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
    var a = 1 
    var b = 2 
    var c=a+b
  res.send("hello world");
});
//127.0.0.1=localhost

app.listen(port, () =>
  console.log(`example listening app at http://localhost:${port}`)
);
