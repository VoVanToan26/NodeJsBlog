const Course = require("./models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class CoursesController {
  // [GEt] .courses/:slug

  show(req, res) {
    res.send("COURSE detail");
  }
}

module.exports = new CoursesController();
