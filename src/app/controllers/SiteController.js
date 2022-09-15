class SiteController {
  // [GEt] /
  index(req, res) {
    res.render("home");
  }
  // [GEt] search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
