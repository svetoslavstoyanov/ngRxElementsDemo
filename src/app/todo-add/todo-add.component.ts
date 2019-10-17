import { Component, OnInit, OnDestroy, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../app.state';
import * as TodoActions from './../+store/actions/todo.actions';
import * as CounterActions from './../+store/actions/counter.actions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchInput', { static: true }) firstNameElement: ElementRef;

  counter = 1;
  subscription: Subscription;
  addTodoForm: FormGroup = this.formBuilder.group({
    todo: ['', Validators.required]
  });

  constructor(private store: Store<IAppState>, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.store.select('counter')
      .subscribe((data) => this.counter = data);
  }

  ngAfterViewInit() {
    window.addEventListener('keyup', (e) => e.key === '/' && this.firstNameElement.nativeElement.focus());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTodo() {
    const todo = { todo: this.addTodoForm.value.todo };
    this.store.dispatch(new TodoActions.AddTodo(todo));
    this.store.dispatch(new CounterActions.CounterIncrease());
    this.addTodoForm.reset();
  }
}
