const Course = require("./models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class CoursesController {
  // [GEt] .courses/:slug
  show(req, res, next) {
    // require.query.name   querry whrerget method
    // require.body.name;   body where post method
    // req.params.slug;   when use params
    console.log(req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
