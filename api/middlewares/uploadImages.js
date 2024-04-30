//middleware for uploading images
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

const productImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      // Define the directory where the resized image will be saved
      const dir = path.join(__dirname, "../public/images/products/");
      // Create the directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        // Use path.resolve to ensure the correct path is used
        .toFile(path.resolve(dir, file.filename));
      fs.unlinkSync(path.resolve(dir, file.filename));
    })
  );
  next();
};

const blogImageResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      // Define the directory where the resized image will be saved
      const dir = path.join(__dirname, "../public/images/blogs/");
      // Create the directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        // Use path.resolve to ensure the correct path is used
        .toFile(path.resolve(dir, file.filename));
      fs.unlinkSync(path.resolve(dir, file.filename));
    })
  );
  next();
};
module.exports = { uploadPhoto, productImageResize, blogImageResize };
