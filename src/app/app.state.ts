import { ITodo } from './models/todo';

export interface IAppState {
    readonly todo: ITodo[];
}