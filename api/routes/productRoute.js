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
  deleteImages,
} = require("../controller/productController");
const {
  uploadPhoto,
  productImageResize,
} = require("../middlewares/uploadImages");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put(
  "/upload/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
  uploadImages
);
router.get("/:id", getSingleProduct);
router.put("/wishlist", authMiddleware, addToWishList);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);
router.get("/product-list", getAllProducts);

module.exports = router;
