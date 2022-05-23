import React, { useState } from 'react';

const StateHooks = () => {
  const [Counter, setCounter] = useState(100);

  const onclick = () => {
    setCounter(Counter + 1);
  };

  return (
    <div>
      {Counter}
      <button onClick={onclick}>up</button>
    </div>
  );
};

export default StateHooks;
