const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoId");

const createBlog = asyncHandler(async (req, res) => {});

module.exports = { createBlog };
