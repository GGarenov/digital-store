const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  removeProductFromCart,
  updateProductQuantityFromCart,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/order/update-order/:id", authMiddleware, isAdmin);

router.put("/update-password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
// router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getAllUsers);
// router.get("/get-orders", authMiddleware, getOrders);
// router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logoutUser);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/cart", authMiddleware, getUserCart);

router.get("/:id", authMiddleware, isAdmin, getSingleUser);
// router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/delete-product-cart", authMiddleware, removeProductFromCart);
// router.put(
//   "/update-product-cart/:cartItemId/:newQuantity",
//   authMiddleware,
//   updateProductQuantityFromCart
// );

router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
