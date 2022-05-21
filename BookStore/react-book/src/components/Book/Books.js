import React from 'react';
const URL = "http:'localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  return <div>Books</div>;
};

export default Books;
