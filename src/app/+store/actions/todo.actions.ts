
import { ITodo } from './../../models/todo';
import { Action } from '@ngrx/store';

// Section 2
export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';

// Section 3
export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: ITodo) { }
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;

    constructor(public payload: number) { }
}

// Section 4
export type Actions = AddTodo | RemoveTodo;
