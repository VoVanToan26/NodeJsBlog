const Course = require("./models/Course");

class SiteController {
  // [GEt] /
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) res.json(courses);
      res.status(400).json({ error: "ERROR" });
    });

    // res.render("home");
  }
  // [GEt] search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
