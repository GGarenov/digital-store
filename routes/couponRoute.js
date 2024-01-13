const express = require("express");
const router = express.Router();
const { createCoupon, getAllCoupons } = require("../controller/couponController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, isAdmin, getAllCoupons);

module.exports = router;
