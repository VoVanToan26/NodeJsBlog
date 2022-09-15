const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");
//index
router.get("/search", siteController.search); // Bat cu duoi nao cung tury cap dc
router.get("/", siteController.index);

module.exports = router;
