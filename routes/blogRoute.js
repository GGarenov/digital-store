const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
} = require("../controller/blogController");
const { uploadPhoto, blogImageResize } = require("../middlewares/uploadImages");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), blogImageResize, uploadImages);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);

router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
