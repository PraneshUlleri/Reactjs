const express = require('express');
const router = express.Router();
const { signUp } = require('../acontroller/user-controller');
router.get('/', (req, res, next) => {
  res.send('heeee');
});

router.post('/signup', signUp);

module.exports = router;
