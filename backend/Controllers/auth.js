const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    console.log("user +++++++++++++++");
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "user already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userModel = new UserModel({ name, email, password: hashedPassword });

    await userModel.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "user not exist" });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: "email or password wrong" });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({ message: "Login successfully", jwtToken, email });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports = {
  signup,
  login,
};
