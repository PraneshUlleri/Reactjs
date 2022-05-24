const User = require('../model/User');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(err);
  }

  return res.status(201).json({ message: user });
};

exports.signup = signup;
