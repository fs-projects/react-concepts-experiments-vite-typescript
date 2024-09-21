import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { result: state.result + action.amount };
    case 'SUBTRACT':
      return { result: state.result - action.amount };
    case 'MULTIPLY':
      return { result: state.result * action.amount };
    case 'DIVIDE':
      return { result: Math.floor(state.result / action.amount) };
  }
};

export default function ReducerExample() {
  const initialState = {
    result: 0,
  };
  const [state, dispatch] = useReducer(
    reducer,
    initialState
    // initialStateUpdateFn
  );
  return (
    <>
      <div>Result : {state.result}</div>
      <button onClick={() => dispatch({ type: 'ADD', amount: 10 })}>Add</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT', amount: 2 })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: 'MULTIPLY', amount: 2 })}>
        Multiply
      </button>
      <button onClick={() => dispatch({ type: 'DIVIDE', amount: 2 })}>
        Divide
      </button>
    </>
  );
}
