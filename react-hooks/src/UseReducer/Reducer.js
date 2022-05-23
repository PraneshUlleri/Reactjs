import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      console.log('1');
      return { countr: state.countr + 1, showTextr: state.showTextr };
    case 'toggleShowText':
      console.log('2');
      return { countr: state.countr + 1, showTextr: !state.showTextr };
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  const incr = () => {
    setCount(count + 1);
    setShowText(!showText);
  };

  const [state, dispatch] = useReducer(reducer, { countr: 0, showTextr: true });

  return (
    <div>
      Example with useState <p />
      <h1>{count}</h1>
      <button onClick={incr}>click here</button>
      {showText && <p>helloo</p>}
      Example with useReduce <p />
      <h1>{state.countr}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
          dispatch({ type: 'toggleshowText' });
        }}
      >
        click here
      </button>
      {state.showTextr && <p>helloo</p>}
    </div>
  );
};

export default Reducer;
