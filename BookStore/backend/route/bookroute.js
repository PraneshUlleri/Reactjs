const express = require('express');
const router = express.Router();

const Book = require('../model/Book');
const BookController = require('../controller/bookcontroller');

router.get('/', BookController.getAllBooks);
router.post('/', BookController.addBooks);
router.get('/:id', BookController.getBookById);
router.put('/:id', BookController.updateBookById);
router.delete('/:id', BookController.deleteBookById);
module.exports = router;
