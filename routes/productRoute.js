const express = require("express");
const { createProduct, getSingleProduct } = require("../controller/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
