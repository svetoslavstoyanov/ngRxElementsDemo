import { Component, OnInit, OnDestroy, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './../app.state';
import * as TodoActions from './../+store/actions/todo.actions';
import * as CounterActions from './../+store/actions/counter.actions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  isFocused = false;

  counter = 1;
  counter$: Observable<number>;

  addTodoForm: FormGroup = this.formBuilder.group({
    todo: ['', Validators.required]
  });

  constructor(private store: Store<IAppState>, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  ngAfterViewInit() {
    document.addEventListener('keyup', this.focusOnInput);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keyup', this.focusOnInput);
  }

  focusOnInput = (e: KeyboardEvent) => (e.key === '/' && (this.isFocused = true, this.searchInput.nativeElement.focus()));

  addTodo() {
    const todo = { todo: this.addTodoForm.value.todo };
    this.store.dispatch(new TodoActions.AddTodo(todo));
    this.store.dispatch(new CounterActions.CounterIncrease());
    this.addTodoForm.reset();
  }
}
