const express = require("express");
const { createProduct, getSingleProduct, getAllProducts, updateProduct } = require("../controller/productController");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.get("/", getAllProducts);

module.exports = router;
