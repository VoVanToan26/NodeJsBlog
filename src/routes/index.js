const newsRouter = require("./news");
const coursesRouter = require("./site");
const siteRouter = require("./site");
console.log("newsRouter", newsRouter);
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/:slug", coursesRouter);
  app.use("/search", siteRouter);
}

module.exports = route;
