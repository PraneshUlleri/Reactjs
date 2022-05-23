import React from 'react';
import { useState } from 'react';

const StateHooks2 = () => {
  const [InputValue, setInputValue] = useState('Value');

  const iv = (event) => {
    const newvalue = event.target.value;
    setInputValue(newvalue);
  };

  return (
    <div>
      <input placeholder="enter some value" onChange={iv} />
      {InputValue}
    </div>
  );
};

export default StateHooks2;
