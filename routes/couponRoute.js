const express = require("express");
const router = express.Router();
const { createCoupon } = require("../controller/couponController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon);

module.exports = router;
