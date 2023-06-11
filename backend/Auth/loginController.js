const User = require("./loginModel");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const generateToken = require("./utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  console.log("first")
  console.log(req.body , "Hello");
  const email = req.body.email;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(409);
    res.json({
      errorMessage: "User already exists",
    });
  }

  const user = await User.create({
    views: req.body.views,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    pic: req.body.pic,
  });

  if (user) {
    res.status(201).json({
      userDetails: user,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// login Authentication
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      userData: user,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    res.json({
      errorMessage: "Invalid Email or Password",
    });
  }
});

const getAll = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json({
      message: "ok",
      userList: allUsers,
    });
  } catch (err) {
    return res.status(412).json({
      message: err,
    });
  }
};

const dataModification = async (req, res) => {
  try {
    const modifiedData = {
      views: req.body.views,
      name: req.body.name,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      pic: req.body.pic,
      updatedAt: new Date().getTime(),
    };
    // console.log(req.params.Id);
    const updated = await User.findByIdAndUpdate(
      { _id: req.params.Id },
      modifiedData
    );
    return res.json(updated);
  } catch (err) {
    return res.json({ errorMessage: err });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const removeUser = await User.findByIdAndDelete(req.params.userId);
    return res.json(removeUser);
  } catch (err) {
    return res.json({ message: err });
  }
};

module.exports = {
  registerUser,
  authUser,
  dataModification,
  DeleteUser,
  getAll,
};
