import React, { createContext, useContext, useState, Fragment } from 'react';


interface AdvContextType {
    name: string;
}

const initialAdvContext: AdvContextType = {
    name: 'hey!'
}

export const AdvContext = createContext(initialAdvContext);


interface Props {
    children: JSX.Element[] | JSX.Element
}

function AdvContextProvider(props: Props) {
    const state = useContext(AdvContext);
    const [contextValue, setContext] = useState(state);
    return (
        <AdvContext.Provider value={contextValue}>
            <Fragment>
                <input
                    onChange={(e) => setContext({
                        name: e.target.value
                    })}
                    value={contextValue.name}
                    type="text" />
                {props.children}
            </Fragment>
        </AdvContext.Provider>
    )
}

export default AdvContextProvider;
