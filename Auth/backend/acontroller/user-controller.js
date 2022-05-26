const User = require('../amodel/user-model');

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (error) {
    console.log('error is : ' + error);
  }

  if (existingUser) {
    return res.status(400).json({ message: 'user already exist' });
  }

  //   break....
  try {
    await user.save();
  } catch (error) {
    console.log('error: ' + error + ' is the error');
  }

  return res.status(201).json({ message: user });
};

exports.signUp = signUp;
