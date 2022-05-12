import React from 'react';
import { useState } from 'react';

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState(0);
  const inputChange = (event) => {
    setPrevious(Number(event.target.value));
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <label>
        previous clicks:{' '}
        <input type="text" value={previous} onChange={inputChange} />
      </label>
      <p>you have clicked this {previous + count} times</p>

      <button onClick={increase}>click here bro</button>
    </div>
  );
}
