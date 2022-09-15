const newsRouter = require("./news");
const siteRouter = require("./site");
console.log("newsRouter", newsRouter);
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/search", siteRouter);
}

module.exports = route;
