import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../app.state';
import { ITodo } from './../models/todo';
import * as TodoActions from './../actions/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  addTodo(todo) {
    this.store.dispatch(new TodoActions.AddTodo(todo));
  }

  ngOnInit() {
  }

}
