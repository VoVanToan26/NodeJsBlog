class NewsController {
    
    // [GEt] news/:slug
    show(req, res) {
        res.send("news detail");
    }
    // [GEt] /news
    index(req, res) {
      res.render("news");
    }
}
module.exports = new NewsController();
