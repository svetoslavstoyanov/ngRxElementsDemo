
import * as CounterActions from './../actions/counter.actions';

// Section 1
const initialState = 1;

// Section 2
export function reducerCounter(state: number = initialState, action: CounterActions.Actions) {

    // Section 3
    switch (action.type) {

        case CounterActions.COUNTER_INCREASE:
            return state + 1;

        case CounterActions.COUNTER_DECREASE:
            return state - 1;

        default:
            return state;
    }
}
