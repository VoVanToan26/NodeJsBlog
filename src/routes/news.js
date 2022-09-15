const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");
//index
router.get("/:slug", newsController.show); // Bat cu duoi nao cung tury cap dc

router.get("/", newsController.index);

module.exports = router;
