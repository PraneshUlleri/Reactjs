import { Button } from '@mui/material';
import React from 'react';
import './Book.css';

const Book = (props) => {
  const { name, author, description, price, image } = props.book;
  return (
    <div className="cards">
      <img src={image} alt={'name'} />
      <article>by {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Price: {price}</h2>
      <Button>update</Button>
      <Button> DELETE</Button>
    </div>
  );
};

export default Book;
