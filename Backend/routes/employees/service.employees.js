const User = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()

// REGISTER
exports.registerUser = async (data, callback) => {
  try {
    const { name, age, phone, email, city, password } = data;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return callback(null, { status: 400, message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = new User({
      name,
      age,
      phone,
      email,
      city,
      password: hashedPassword
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return callback(null, { status: 201, token });

  } catch (err) {
    return callback(err);
  }
};


// LOGIN
exports.loginUser = async (email, password, callback) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return callback(null, { status: 404, message: "User not found" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return callback(null, { status: 401, message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    callback(null, {
      status: 200,
      user,
      token
    });

  } catch (err) {
    callback(err);
  }
};


// CHANGE PASSWORD
exports.changeUserPassword = async (userId, oldPassword, newPassword, callback) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      return callback(null, { status: 404, message: "User not found" });
    }

    const isMatch = bcrypt.compareSync(oldPassword, user.password);

    if (!isMatch) {
      return callback(null, { status: 401, message: "Old password incorrect" });
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    callback(null, { status: 200, message: "Password updated" });

  } catch (err) {
    callback(err);
  }
};
exports.getUser=async(user,callback)=>{
 try{
  const u=await User.findById(user.id);
   callback(null,u)
 }catch(err){
  callback(err)
 }

}