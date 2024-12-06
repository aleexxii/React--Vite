import React, { useState,memo,useCallback } from "react";

const Counter = () => {
  const [counter, setCount] = useState(0);
  const ref = React.useRef(0)

  const increment = useCallback(() => {
    setCount((currentCounter) => currentCounter + 1)
    ref.current++
    console.log(ref.current);
  },[setCount])

  const decrement = useCallback(()=>{
    setCount((currentCounter) => currentCounter - 1)
    ref.current++
    console.log(ref.current);
  },[setCount])

  return (
    <div className="counter_div">
      <button onClick={increment}>+</button>
      <h4>{counter}</h4>
      <button onClick={decrement}>-</button>
    </div>
  );
};


export default memo(Counter)