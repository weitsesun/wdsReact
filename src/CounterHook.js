import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

export default function CounterHook({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      {console.log('counter hook is rendered')}
      <div>CounterHook</div>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}
