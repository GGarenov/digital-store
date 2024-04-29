const express = require("express");
const {
  uploadImages,
  deleteImages,
} = require("../controller/uploadController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImageResize,
} = require("../middlewares/uploadImages");
const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
