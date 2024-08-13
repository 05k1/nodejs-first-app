const express = require("express");
const router = express.Router();
const productController = require("./product.controller");
const prefix = "/products";

router.get(prefix, productController.getAllProducts);
router.get(`${prefix}/create`, productController.createProduct);
router.post(`${prefix}/create`, productController.postCreateProduct);

module.exports = router;
