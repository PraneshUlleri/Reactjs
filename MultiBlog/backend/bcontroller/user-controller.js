import user from '../bmodel/user-model';

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await user.find();
  } catch (error) {
    return console.log(error);
  }

  if (!user) {
    return res.status(404).json({ message: 'no user' });
  }
  return res.status(200).json({ users });
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await user.findOne({ email });
  } catch (error) {
    return console.log(error + ' signup');
  }

  if (existingUser) {
    return res.status(400).json({ message: 'user exist' });
  }

  const newuser = new user({
    name,
    email,
    password,
  });

  try {
    newuser.save();
  } catch (error) {
    return console.log(error);
  }

  return res.status(201).json({ newuser });
};
