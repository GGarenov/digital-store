const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongodbId");

//Create a blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Update a blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a blog
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const getBlog = await Blog.findById(id).populate("likes");
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numberViews: 1 },
      },
      { new: true }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Get All Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getAllBlogs = await Blog.find();
    res.json(getAllBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete a blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deleteBlog = await Blog.findByIdAndDelete(id);
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Like a blog
const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  console.log(req.body);

  //Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  //Find the login user
  const loginUserId = req.user._id;
  //Find if ther user already liked the blog
  const isLiked = blog.isLiked;
  //Find if the user has disliked the blog
  const alreadyDisliked = blog?.dislikes?.find((userId) => userId?.toString() === loginUserId?.toString());
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

//Dislike a blog
const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  console.log(req.body);

  //Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  //Find the login user
  const loginUserId = req.user._id;
  //Find if ther user already liked the blog
  const isDisliked = blog.isDisliked;
  //Find if the user has disliked the blog
  const alreadyLiked = blog?.likes?.find((userId) => userId?.toString() === loginUserId?.toString());
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog };
