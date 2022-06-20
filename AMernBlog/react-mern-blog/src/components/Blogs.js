import axios from 'axios';
import { set } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/blog/all`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => console.log(data.blogs));
  }, []);

  return <div>Blogs</div>;
};

export default Blogs;
