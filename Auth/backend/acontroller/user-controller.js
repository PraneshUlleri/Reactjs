const User = require('../amodel/user-model');
const bcrypt = require('bcryptjs');

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  // checking for exisiting user
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

  //bcrypt
  const hashedPassword = bcrypt.hashSync(password);

  // create the user
  const user = new User({ name, email, password: hashedPassword });
  try {
    await user.save();
  } catch (error) {
    console.log('error: ' + error + ' is the error');
  }

  //return when everything is alright
  return res.status(201).json({ message: user });
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  let exisitingUser;
  try {
    exisitingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log('error is : ' + error);
  }
  if (!exisitingUser)
    return res.status(400).json({ message: 'user not found. sign up please' });

  const ispasswordCorrect = bcrypt.compareSync(
    password,
    exisitingUser.password
  );
  if (!ispasswordCorrect) {
    return res.status(400).json({ message: 'invalid email/ password' });
  }
  return res.status(200).json({ message: 'sucessfully logged in ' });
};

exports.signUp = signUp;
exports.logIn = logIn;
