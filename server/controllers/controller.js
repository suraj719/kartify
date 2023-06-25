const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) return res.status(400).send("Email already exists");

  const usernameExists = await User.findOne({ username: req.body.username });

  if (usernameExists) return res.status(400).send("username already exists");
  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  // create new user
  const hasheduser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
    // password: req.body.password,
  });
  try {
    const saveduser = await User.create(hasheduser);
    res.status(201).json(saveduser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("invalid username");
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("invalid password");
  const token = jwt.sign({name:user.username}, process.env.TOKEN_SECRET);
  //   res.header("auth-token", token).send(token);
  try {
    res.send({token:token})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const forgotPass = async (req,res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if(!emailExists) return res.status(400).send("invalid email")
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const saveduser = await User.findOneAndUpdate({email:emailExists.email},{$set: {password:hashPassword}},{
      new:true,
      runValidators:true,
    })
    res.status(201).json({saveduser});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  forgotPass,
};
