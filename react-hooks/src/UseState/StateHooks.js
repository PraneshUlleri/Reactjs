import React from 'react';
import { useState } from 'react';

const StateHooks = () => {
  const [Counter, setCounter] = useState(100);

  const increment = () => {
    setCounter(Counter + 1);
  };
  return (
    <div>
      {Counter}
      <button onClick={increment}>up</button>
    </div>
  );
};

export default StateHooks;
