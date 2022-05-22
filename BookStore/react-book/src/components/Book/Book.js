import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => window.location.reload());
  };
  return (
    <div className="card">
      <img src={image} alt={'name'} />
      <article>by {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Price: {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        update
      </Button>
      <Button onClick={deleteHandler}> DELETE</Button>
    </div>
  );
};

export default Book;
