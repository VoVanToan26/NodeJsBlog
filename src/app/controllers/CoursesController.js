const Course = require("./models/Course");
const { mongooseToOject } = require("../../util/mongoose");
class CoursesController {
  // [GEt] .courses/:slug
  show(req, res, next) {
    // require.query.name   querry whrerget method
    // require.body.name;   body where post method
    // req.params.slug;   when use params
    console.log(req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToOject(course) });
      })
      .catch(next);
  }

  //GET.courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save() //save done
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
}

module.exports = new CoursesController();
