import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from './../models/todo';
import { IAppState } from './../app.state';
import { Observable } from 'rxjs';
import * as TodoActions from './../+store/actions/todo.actions';
import * as CounterActions from '../+store/actions/counter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Observable<ITodo[]>;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.todos = this.store.select('todo');
  }

  deleteTodo(index) {
    this.store.dispatch(new TodoActions.RemoveTodo(index));
    this.store.dispatch(new CounterActions.CounterDecrease());
  }
}
