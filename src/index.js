const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("express-handlebars");

const SortMiddleWare = require("./app/middlewares/SortMiddleWare")

const methodOverride = require("method-override");
const route = require("./routes");
const db = require("./config/db");
const app = express(); //call function object
const port = 2200;
db.connect();
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jquery",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(morgan("combined"));
// template engines config handlebars templates
app.engine(
  "hbs",
  hbs.engine({
    //config
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field == sort.column ? sort.type : 'default'
        const icons = {
          default: '<i class="fa-solid fa-sort"></i>',
          asc: '<i class="fa-solid fa-arrow-up-wide-short"></i>',
          desc: '<i class="fa-solid fa-arrow-down-wide-short"></i>',
        }
        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        }
        const icon = icons[sortType]
        const type = types[sortType]
        return `
          <a href="?_sort&column=${field}&type=${type}">
            ${icon}
          </a>
        `
      }
    }
  })
);
app.set("view engine", "hbs"); // suwr dungj view engine laf hbs
app.set("views", path.join(__dirname, "resources", "views"));
app.use(express.urlencoded({ extended: true }));
// custom middleware
app.use(SortMiddleWare);
// app.use(middleware)
// function middleware(req, res, next) {
//   if(['vethuong','vevip'].includes(req.query.ve)){
//     req.face='GachGach';
//     return next();
//   }
//   res.status(404).json({
//     message: 'Not Found'
//   })
// }



//routes init
route(app);
//127.0.0.1=localhost
//
app.listen(port, () =>
  console.log(`App listening app at http://localhost:${port}`)
);

