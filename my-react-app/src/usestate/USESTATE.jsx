import React,{ useState } from 'react'
const USESTATE = () => {
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
    <div>
        <h1>Ganne app</h1>
        <h2>Count:{count}</h2>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>+</button>
        </div>
  )
}

export default USESTATE