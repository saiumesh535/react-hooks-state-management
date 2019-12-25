import React, { useContext, Fragment, useState } from 'react';
import NamesRenderer, { NamesContext } from './names.state';


function NamesOne() {
    const { state } = useContext(NamesContext);
    return (
        <Fragment>
            <p>Showing names</p>
            {state.names.map((name) => (
                <p>{name}</p>
            ))}
        </Fragment>
    )
}

function ShowAndAdd() {
    const { state, dispatch } = useContext(NamesContext);
    const [name, setName] = useState('');

    function AddName() {
        dispatch({
            type: 'ADD_NAME',
            payload: name
        })
    }

    function RemoveName() {
        dispatch({
            type: 'REMOVE_NAME',
            payload: name
        })
    }

    function ResetNames() {
        dispatch({
            type: 'RESET_NAME'
        })
    }

    return (
        <Fragment>
            <p>Add name</p>
            <input value={name} onChange={(e) => setName(e.target.value)}  type="text"/>
            <button onClick={AddName}>Add Name</button>
            <button onClick={RemoveName}>Remove Name</button>
            <button onClick={ResetNames}>Reset Name</button>
        </Fragment>
    )
}



function NamesConsumer() {
    return (
        <NamesRenderer>
            <h1>State Management Example</h1>
            <NamesOne />
            <ShowAndAdd />
        </NamesRenderer>
    )
}

export default NamesConsumer;
