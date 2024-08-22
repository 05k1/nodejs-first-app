const express = require("express");
const router = express.Router();
const categoryController = require("./category.controller");
const prefix = "/category";

router.get(prefix, categoryController.getAllCategory);
router.get(`${prefix}/detail/:id`, categoryController.getCategoryById);

module.exports = router;
