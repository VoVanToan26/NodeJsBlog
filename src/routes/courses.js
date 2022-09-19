const express = require("express");
const router = express.Router();
const coursesController = require("../app/controllers/CoursesController");
//index
router.post("/store", coursesController.store); // Bat cu duoi nao cung tury cap dc
router.get("/create", coursesController.create); // Bat cu duoi nao cung tury cap dc
router.get("/edit/:id", coursesController.edit); // Bat cu duoi nao cung tury cap dc
router.put("/edit/:id", coursesController.update); // Bat cu duoi nao cung tury cap dc
router.delete("/delete/:id", coursesController.delete); // Bat cu duoi nao cung tury cap dc
router.get("/:slug", coursesController.show); // Bat cu duoi nao cung tury cap dc
module.exports = router;
