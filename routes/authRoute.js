const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updatedUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getAllUsers);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.put("/:id", updatedUser);

module.exports = router;
