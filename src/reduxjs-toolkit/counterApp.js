import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementExtra } from "./state/counter/counterSlice";

const CounterAppReduxToolkit = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementExtra(50))}>Increment Extra</button>
            <button onClick={() => dispatch(incrementAsync(30))}>Increment Async</button>
        </>
    )
}

export default CounterAppReduxToolkit;