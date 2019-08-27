import { Action } from '@ngrx/store';

// Section 2
export const COUNTER_INCREASE = 'COUNTER++';
export const COUNTER_DECREASE = 'COUNTER--';

// Section 3
export class CounterIncrease implements Action {
    readonly type = COUNTER_INCREASE;
}

export class CounterDecrease implements Action {
    readonly type = COUNTER_DECREASE;
}

// Section 4
export type Actions = CounterIncrease | CounterDecrease;
