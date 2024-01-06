const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token:", token);
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded JWT:", decoded);
        const user = await User.findById(decoded.id);
        console.log("User:", user);
        req.user = user;
        next();
      }
    } catch (error) {
      console.error("Error in authMiddleware:", error);
      throw new Error("Not authorized, token failed");
    }
  } else {
    console.error("Error in authMiddleware: Token not found");
    throw new Error("Token not found");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  console.log("User email:", email);
  const adminUser = await User.findOne({ email });
  console.log("Admin user:", adminUser);
  if (adminUser.role !== "admin") {
    console.error("Error in isAdmin: User is not an admin");
    throw new Error("You are not an admin");
  }
  next();
});
module.exports = { authMiddleware, isAdmin };
