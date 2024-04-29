const asyncHandler = require("express-async-handler");
const {
  claudinaryUploadImg,
  claudinaryDeleteImg,
} = require("../utils/cloudinary");
const fs = require("fs");

//Upload images
const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = async (path) => await claudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }

    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete images
const deleteImages = asyncHandler(async (req, res) => {
  try {
    const deleted = claudinaryDeleteImg(path, "images");
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  uploadImages,
  deleteImages,
};
