
import { Action } from '@ngrx/store';
import * as CounterActions from './../actions/counter.actions';
import { ICounter } from '../models/counter';

// Section 1
const initialState: ICounter = {
    counter: 1
};

// Section 2
export function reducerCounter(state: ICounter = initialState, action: CounterActions.Actions) {

    // Section 3
    switch (action.type) {

        case CounterActions.COUNTER_INCREASE:
            return { counter: state.counter + 1 };

        case CounterActions.COUNTER_DECREASE:
            return { counter: state.counter - 1 };

        default:
            return state;
    }
}
