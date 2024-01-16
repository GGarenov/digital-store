const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//Create Color
const createColor = asyncHandler(async (req, res) => {
  try {
    const newColor = await Color.create(req.body);
    res.json(newColor);
  } catch (error) {
    throw new Error(error);
  }
});

//Update Color
const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete Color
const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a Color
const getColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getAColor = await Color.findById(id);
    res.json(getAColor);
  } catch (error) {
    throw new Error(error);
  }
});

//Get all categories
const getAllColors = asyncHandler(async (req, res) => {
  try {
    const getAllColors = await Color.find();
    res.json(getAllColors);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createColor, updateColor, deleteColor, getColor, getAllColors };
