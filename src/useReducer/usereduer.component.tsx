import React, { useState, Fragment, useReducer } from 'react';
import { counterReducer, initialCounterState } from './counter.reducer';


function UseReducer() {
    const [counterInput, setCounterInput] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);
    function increment() {
        dispatch({
            type: 'INCREMENT_BY',
            payload: counterInput
        });
    }

    function decrement() {
        dispatch({
            type: 'DECREMENT_BY',
            payload: counterInput
        })
    }

    function reset() {
        dispatch({
            type: 'RESET_COUNTER'
        });
    }

    return (
        <Fragment>
            <h1>This is useReducer example</h1>
            <p>Counter Input</p>
            <input
                onChange={(e) => setCounterInput(Number(e.target.value))}
                value={counterInput}
                type="number"
                placeholder="Enter counter" />
            <button onClick={increment}>Increment by</button>
            <button onClick={decrement}>Decrement by</button>
            <button onClick={reset}>Reset</button>
            <p>Counter is {state.payload}</p>

        </Fragment>
    )
}

export default UseReducer;
