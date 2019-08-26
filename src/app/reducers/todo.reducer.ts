import { ITodo } from './../models/todo';
import { Action } from '@ngrx/store';
import * as TodoActions from './../actions/todo.actions';

// Section 1
const initialState: ITodo = {
    todo: 'Initial todo'
};

// Section 2
export function reducerTodo(state: ITodo[] = [initialState], action: TodoActions.Actions) {

    // Section 3
    switch (action.type) {

        case TodoActions.ADD_TODO:
            return [...state, action.payload];

        case TodoActions.REMOVE_TODO:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}