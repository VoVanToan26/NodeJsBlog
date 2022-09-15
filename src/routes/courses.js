const express = require("express");
const router = express.Router();
const coursesController = require("../app/controllers/CoursesController");
//index
router.get("/:slug", coursesController.show); // Bat cu duoi nao cung tury cap dc
module.exports = router;
