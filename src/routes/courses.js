const express = require("express");
const router = express.Router();
const coursesController = require("../app/controllers/CoursesController");
//index
router.post("/store", coursesController.store); // Bat cu duoi nao cung tury cap dc
router.get("/create", coursesController.create); // Bat cu duoi nao cung tury cap dc
router.get("/:slug", coursesController.show); // Bat cu duoi nao cung tury cap dc
module.exports = router;
