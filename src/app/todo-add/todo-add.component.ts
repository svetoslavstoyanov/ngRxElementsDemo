import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../app.state';
import { ITodo } from './../models/todo';
import * as TodoActions from './../+store/actions/todo.actions';
import * as CounterActions from './../+store/actions/counter.actions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit, OnDestroy {

  counter = 1;
  subscription: Subscription;

  constructor(private store: Store<IAppState>, private formBuilder: FormBuilder) {

  }

  addTodoForm: FormGroup = this.formBuilder.group({
    todo: ['', Validators.required]
  });

  addTodo() {
    const todo = { todo: this.addTodoForm.value.todo };
    this.store.dispatch(new TodoActions.AddTodo(todo));
    this.store.dispatch(new CounterActions.CounterIncrease());
    this.addTodoForm.reset();
  }

  ngOnInit() {
    this.subscription = this.store.select('counter')
      .subscribe((data) => this.counter = data);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
