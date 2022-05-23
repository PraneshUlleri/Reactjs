import React, { useEffect, useState } from 'react';
import axios from 'axios';
const EffectHook = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data[0].email);
      console.log('12');
    });
  }, []);

  return <div>EffectHook Example {data}</div>;
};

export default EffectHook;
