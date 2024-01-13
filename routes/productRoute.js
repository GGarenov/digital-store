const express = require("express");
const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadImages,
} = require("../controller/productController");
const { uploadPhoto, productImageResize } = require("../middlewares/uploadImages");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImageResize, uploadImages);
router.get("/:id", getSingleProduct);
router.put("/wishlist", authMiddleware, addToWishList);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProducts);

module.exports = router;
