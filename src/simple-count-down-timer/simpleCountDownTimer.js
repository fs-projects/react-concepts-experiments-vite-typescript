import React, { useState, useEffect } from 'react';

export default function CountDownTimerSimple() {
  const [counter, setCounter] = useState(50);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      }
    }
  }, [counter, start]);

  const handleClick = () => {
    setStart((prev) => !prev);
  };
  return (
    <>
      <div>CountDown: {counter}</div>
      <button onClick={handleClick}>start</button>
    </>
  );
}
