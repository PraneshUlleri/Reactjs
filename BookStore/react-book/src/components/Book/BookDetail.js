import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const [checked, setchecked] = useState(false);
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler().then((data) => setInputs(data.book));
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/books'));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      Update BookDetail
      {inputs && (
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
                <Checkbox
                  checked={checked}
                  onChange={() => setchecked(!checked)}
                />
              }
              label="available"
            />

            <Button variant="contained" type="submit">
              Add Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
