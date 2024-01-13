const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const claudinaryUploadImg = require("../utils/cloudinary");
const validateMongodbId = require("../utils/validateMongodbId");

//Create product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Update product
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await Product.findByIdAndDelete({ _id: id });
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Get single product
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    //Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limiting fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //Pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const numProducts = await Product.countDocuments();
      if (skip >= numProducts) throw new Error("This page does not exist");
    }
    console.log(page, limit, skip);

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

//Add to wishlist
const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === productId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(_id, { $pull: { wishlist: productId } }, { new: true });
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(_id, { $push: { wishlist: productId } }, { new: true });
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//Rating
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, productId, comment } = req.body;
  try {
    const product = await Product.findById(productId);
    let alreadyRated = product.ratings.find((userId) => userId.postedBy.toString() === _id.toString());
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        { ratings: { $elemMatch: alreadyRated } },
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
        { new: true }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }
    const getallratings = await Product.findById(productId);
    let totalRating = getallratings.ratings.length;
    let ratingSum = getallratings.ratings.map((item) => item.star).reduce((prev, next) => prev + next, 0);
    let actualRating = Math.round(ratingSum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(productId, { totalrating: actualRating }, { new: true });
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error);
  }
});

//Upload images
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const uploader = async (path) => await claudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
    }
    const findProduct = await Product.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      { new: true }
    );
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadImages,
};
