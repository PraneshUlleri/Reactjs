const Book = require('../model/Book');

const getAllBooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: 'No Product Found' });
  }
  return res.status(200).json({ books });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (error) {
    console.log(error + 'this is the error for adding the book');
  }

  if (!book) {
    return res.status(500).json({ message: 'unable to add' });
  } else {
    return res.status(201).json({ book });
  }
};

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(
      error + 'this is the error found when func getBookById is called'
    );
  }

  if (!book) {
    return res.status(404).json({ message: 'book not found' });
  } else {
    return res.status(200).json({ book });
  }
};

const updateBookById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (error) {
    console.log(
      error + ' this is the erre when func updateBookById is called!'
    );
  }

  if (!book) {
    return res.status(404).json({ message: 'book not found' });
  } else {
    return res.status(200).json({ book });
  }
};

const deleteBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(
      error + ' this is the error when func deleteBookById is called!'
    );
  }

  if (!book) {
    return res.status(404).json({ message: 'book not found' });
  } else {
    return res.status(200).json({ message: 'book is deleted' });
  }
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById;
