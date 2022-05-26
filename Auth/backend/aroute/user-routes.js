const express = require('express');
const router = express.Router();
const {
  signUp,
  logIn,
  verifyToken,
  getUser,
} = require('../acontroller/user-controller');
router.get('/', (req, res, next) => {
  res.send('heeee');
});

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/usertok', verifyToken, getUser);

module.exports = router;
