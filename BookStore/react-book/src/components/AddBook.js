import {
  FormLabel,
  TextField,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import axios from 'axios';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, ' Value ', e.target.value);
  };

  const [checked, setchecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/books'));
  };

  const sendRequest = (e) => {
    axios
      .post('http://localhost:5000/books', {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="Column"
        justifyContent={'center'}
        maxWidth={700}
        alignContent={'center'}
        alignSelf="center"
        marginLeft={'auto'}
        marginRight="auto"
      >
        <FormLabel>NAME: </FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />

        <FormLabel>Author name: </FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />

        <FormLabel>description: </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        />

        <FormLabel>Price: </FormLabel>
        <TextField
          type={'number'}
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={inputs.price}
          onChange={handleChange}
        />

        <FormLabel>image: </FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />

        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setchecked(!checked)} />
          }
          label="available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
