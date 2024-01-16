const Enquiry = require("../models/enqModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

//Create Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//Update Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a Enquiry
const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getAEnquiry = await Enquiry.findById(id);
    res.json(getAEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

//Get all categories
const getAllEnquirys = asyncHandler(async (req, res) => {
  try {
    const getAllEnquirys = await Enquiry.find();
    res.json(getAllEnquirys);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquirys };
