'use client'
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>This is Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </>
  );
}
