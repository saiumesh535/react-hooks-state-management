import { createContext } from 'react';

interface ContextState {
    input: string;
}

export const initialContextState: ContextState = {
    input: 'This is from Context'
}

export const Context = createContext(initialContextState);

