import React, { useContext } from 'react';
import AdvContextProvider, { AdvContext } from './advanced.context';

function ConsumerOne() {
    const context = useContext(AdvContext);
    return (
        <p>Hey value from context, Consumer One {context.name}</p>
    )
}

function ConsumerTwo() {
    const context = useContext(AdvContext);
    return (
        <p>Hey value from context, consumer Two {context.name}</p>
    )
}



function AdvContextConsumer() {
    return (
        <AdvContextProvider>
            <ConsumerOne />
            <ConsumerTwo />
        </AdvContextProvider>
    )
}

export default AdvContextConsumer;
