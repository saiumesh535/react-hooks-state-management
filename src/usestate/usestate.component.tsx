import React, { Fragment, useState } from 'react';


function UseStateComponent() {
    const [count, updateCount] = useState<number>(0);
    return (
        <Fragment>
            <h1>This is useState example</h1>
            <p>This is useState Example</p>
            <p>Counter {count}</p>
            <button onClick={() => updateCount(count + 1)}>update count</button>
        </Fragment>
    )
}

export default UseStateComponent;
