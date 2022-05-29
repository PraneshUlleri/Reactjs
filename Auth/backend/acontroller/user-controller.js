const User = require('../amodel/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'mysecretkey';

//signup function
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

//login function
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
  const token = jwt.sign({ id: exisitingUser._id }, JWT_SECRET_KEY, {
    expiresIn: '1hr',
  });
  return res.status(200).json({
    message: 'sucessfully logged in ' + exisitingUser + ' TOKEN: ' + token,
  });
};

// authorization
const verifyToken = async (req, res, next) => {
  const header = req.headers[`authorization`];
  //   console.log(header);
  const token = header.split(' ')[1];
  if (!token) {
    res.status(404).json({ message: 'No token' });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
    // console.log(user.id);
    req.id = user.id;
  });
  next();
};

// get the details of the user
const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, '-password');
  } catch (error) {
    return new Error(error);
  }
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  return res.status(200).json({ user });
};

exports.signUp = signUp;
exports.logIn = logIn;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
