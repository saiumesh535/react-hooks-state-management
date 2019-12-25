export interface CounterState {
    payload: number;
}

export type CounterAction =
    | { type: 'INCREMENT_BY', payload: number }
    | { type: 'DECREMENT_BY', payload: number }
    | { type: 'RESET_COUNTER' }


export const initialCounterState: CounterState = {
    payload: 0
}

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch(action.type) {
        case 'INCREMENT_BY':
            return {
                payload: state.payload + action.payload
            }
        case 'DECREMENT_BY':
            return {
                payload: state.payload - action.payload
            }
        case 'RESET_COUNTER':
            return {
                payload: initialCounterState.payload
            }
        default:
            return initialCounterState
    }
}
