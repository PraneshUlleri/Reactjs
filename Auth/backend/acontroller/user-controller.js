const User = require('../amodel/user-model');

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
  } catch (error) {
    console.log('error: ' + error + ' is the error');
  }

  return res.status(201).json({ message: user });
};

exports.signUp = signUp;
