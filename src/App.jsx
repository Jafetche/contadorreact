import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='container'>
      <h1>Contador: {count}</h1>
      <div className='button-container'>
      <button class="button button-primary" onClick={increment}>+</button>
      <button class="button button-primary" onClick={decrement}>-</button>
      <button class="button button-secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
