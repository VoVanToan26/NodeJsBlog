const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');
//index
router.get('/stored/courses', meController.storedCourses); // Bat cu duoi nao cung tury cap dc
router.get('/trash/courses', meController.trashCourses); // Bat cu duoi nao cung tury cap dc
module.exports = router;

