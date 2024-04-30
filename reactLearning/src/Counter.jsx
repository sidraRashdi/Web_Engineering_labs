import React from "react";
import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        minus
      </button>
    </div>
  );
}

export default Counter;
