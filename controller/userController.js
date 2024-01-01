const User = require("../models/userModel");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne(email);
  if (!findUser) {
    //Create User
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    //User already exists
    res.json({ message: "User already exists", success: false });
  }
};

module.exports = { createUser };
