const express = require(`express`);
const router = express.Router();
const { signup } = require('../controller/usercontroller');

router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.post('/signup', signup);
module.exports = router;
