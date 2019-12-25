import React, { useReducer, createContext } from 'react';

export interface NamesState {
    names: string[];
}

type NamesReducerAction =
    | { type: 'ADD_NAME', payload: string }
    | { type: 'REMOVE_NAME', payload: string }
    | { type: 'RESET_NAME' }


const initialNamesState: NamesState = {
    names: ['react']
}

function namesReducer(state: NamesState, action: NamesReducerAction): NamesState {
    switch (action.type) {
        case 'ADD_NAME': {
            return { ...state, names: [...state.names, action.payload] }
        }
        case 'REMOVE_NAME': {
            return { ...state, names: state.names.filter((names) => names !== action.payload) }
        }
        case 'RESET_NAME': {
            return initialNamesState;
        }
        default: {
            return initialNamesState;
        }
    }
}

interface ContextType {
    state: NamesState;
    dispatch: (input: NamesReducerAction) => void;
}

export const NamesContext = createContext<ContextType>({}  as ContextType);

interface Props {
    children: JSX.Element[] | JSX.Element;
}

function NamesRenderer(props: Props) {
    const [ state, dispatch ] = useReducer(namesReducer, initialNamesState);
    return (
        <NamesContext.Provider value={{state, dispatch}}>
            { props.children }
        </NamesContext.Provider>
    )
}

export default NamesRenderer;
