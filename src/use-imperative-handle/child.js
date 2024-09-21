import React, { useState, forwardRef, useImperativeHandle } from "react";

const ChildOfUseImperativeHandle = (_, ref) => {
    const [count, setCount] = useState(0);
    const handleClick = (op) => {
        if(op === "inc") {
            setCount(prev => prev + 1 );
        }
        if(op === "dec") {
            setCount(prev => prev - 1 );
        }
    }
    const reset = () => {
        setCount(0);
    }
    useImperativeHandle((ref, () => {
        return {
            reset
        }
    }, []))
    return (
        <>
            <div>{count}</div>
            <button onClick={() => handleClick("inc")}>Increment</button>
            <button onClick={() => handleClick("dec")}>Decrement</button>
        </>
    )
}

export default forwardRef(ChildOfUseImperativeHandle);