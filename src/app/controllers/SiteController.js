const Course = require("./models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // [GEt] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // [GEt] search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
