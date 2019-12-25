import React, { useContext, Fragment } from 'react';

import { Context, initialContextState } from './context';

function UseContextComponent() {
    const lol = useContext(Context);
    return (
        <p>Hello! {lol.input}</p>
    )
}

function ContextProvider() {
    return (
        <Fragment>
            <h1>This is context Example</h1>
            <Context.Provider value={initialContextState}>
                <UseContextComponent />
            </Context.Provider>
        </Fragment>
    )
}



export default ContextProvider;
